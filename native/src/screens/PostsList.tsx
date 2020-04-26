import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

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
  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: state.post.isLoading,
  posts: state.post.posts,
});

const mapDispatchToProps = {
  loadPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
