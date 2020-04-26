import React, { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PostListItem from '../components/PostListItem';
import { loadPosts } from '../redux/reducers/post';

// Import types
import { RootState } from '../redux/reducers';
import { Post } from '../util/types';

interface IPostsListProps {
  isLoading: boolean;
  posts: Post[];
  loadPosts: Function;
}

const PostsList: React.FC<IPostsListProps> = ({
  isLoading,
  posts,
  loadPosts,
}) => {
  useEffect(() => {
    loadPosts();
  }, []);

  const renderPostListItem = ({ item }: any) => {
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

  const postKeyExtractor = ({ id }: Post) => id;

  if (isLoading) {
    <View style={styles.container}></View>;
  }

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && (
        <FlatList
          data={posts}
          renderItem={renderPostListItem}
          keyExtractor={postKeyExtractor}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state: RootState) => ({
  isLoading: state.post.isLoading,
  posts: state.post.posts,
});

const mapDispatchToProps = {
  loadPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
