import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-renderer';
import moment from 'moment';

import { PostScreenRouteProp } from '../App';
import { getPosts } from '../selectors';
import { Post } from '../util/types';

interface PostScreenProps {
  route: PostScreenRouteProp;
}

const PostScreen: React.FC<PostScreenProps> = ({ route }) => {
  const { postId } = route.params;
  const posts = useSelector(getPosts);
  const post = posts.find(({ id }) => id === postId);

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Not available. Please try again later.</Text>
      </View>
    );
  }

  const {
    publishedAt,
    author: { name },
    body,
  } = post;

  return (
    <View style={styles.container}>
      <View style={styles.authorSection}>
        <Text style={styles.author}>
          {`${name}, ${moment(publishedAt).format('YYYY/MM/DD')}`}
        </Text>
      </View>
      <Markdown>{body}</Markdown>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
    padding: 20,
  },
  authorSection: {
    marginBottom: 10,
  },
  author: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default PostScreen;
