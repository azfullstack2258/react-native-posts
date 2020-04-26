import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IPostListItemProps {
  id: string;
  title: string;
  publishedAt: Date;
  author: string;
}

const PostListItem: React.FC<IPostListItemProps> = ({
  id,
  title,
  publishedAt,
  author,
}) => {
  return (
    <View key={id} style={styles.itemContainer}>
      <Text>{`Title: ${title}`}</Text>
      <Text>{`Published Date: ${publishedAt.toString()}`}</Text>
      <Text>{`Author: ${author}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});

export default PostListItem;
