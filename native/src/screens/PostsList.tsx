import React, { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { connect, useSelector } from 'react-redux';

import PostListItem from '../components/PostListItem';
import { loadPosts } from '../redux/reducers/post';
import { getAuthors } from '../selectors';
// Import types
import { RootState } from '../redux/reducers';
import { Post, Author } from '../util/types';

interface IPostsListProps {
  isLoading: boolean;
  posts: Post[];
  loadPosts: Function;
  authors: Author[];
}

class PostsList extends React.Component<IPostsListProps> {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  renderPostListItem = ({ item }: any) => {
    const {
      id,
      title,
      publishedAt,
      author: { name },
    } = item;
    return (
      <PostListItem
        id={id}
        title={title}
        publishedAt={publishedAt}
        author={name}
      />
    );
  };

  postKeyExtractor = ({ id }: Post) => id;

  renderAuthor = ({ id, name }: Author) => <Text key={id}>{name}</Text>;

  render() {
    const { isLoading, posts, authors } = this.props;

    return (
      <View style={styles.container}>
        {isLoading && <Text>Loading...</Text>}
        {!isLoading && (
          <>
            {authors.map(this.renderAuthor)}
            <FlatList
              data={posts}
              renderItem={this.renderPostListItem}
              keyExtractor={this.postKeyExtractor}
            />
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state: RootState) => ({
  isLoading: state.post.isLoading,
  posts: state.post.posts,
  authors: getAuthors(state),
});

const mapDispatchToProps = {
  loadPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
