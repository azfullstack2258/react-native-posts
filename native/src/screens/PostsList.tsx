import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PostListItem from '../components/PostListItem';
import AuthorCheckBox from '../components/AuthorCheckBox';
import { loadPosts } from '../redux/reducers/post';
import { getAuthors, getFilteredPosts } from '../selectors';
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

  renderAuthor = ({ id, name }: Author) => (
    <AuthorCheckBox key={id} info={{ id, name }} />
  );

  render() {
    const { isLoading, posts, authors } = this.props;

    return (
      <View style={styles.container}>
        {isLoading && <Text>Loading...</Text>}
        {!isLoading && (
          <>
            <View style={styles.filterSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Filter by authors</Text>
              </View>
              <View style={styles.authorList}>
                {authors.map(this.renderAuthor)}
              </View>
            </View>
            <View style={styles.postSection}>
              <View style={[styles.sectionHeader, styles.postSectionHeader]}>
                <Text style={styles.sectionTitle}>Posts</Text>
              </View>
              <FlatList
                data={posts}
                renderItem={this.renderPostListItem}
                keyExtractor={this.postKeyExtractor}
              />
            </View>
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
  filterSection: {
    marginBottom: 10,
  },
  authorList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postSection: {
    flex: 1,
    backgroundColor: 'white',
  },
  postSectionHeader: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state: RootState) => ({
  isLoading: state.post.isLoading,
  posts: getFilteredPosts(state),
  authors: getAuthors(state),
});

const mapDispatchToProps = {
  loadPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
