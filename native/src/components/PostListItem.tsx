import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IPostListItemProps {
  id: string;
  title: string;
  publishedAt: Date;
  author: string;
  onPress: (id: string, title: string) => void;
}

const PostListItem: React.FC<IPostListItemProps> = ({
  id,
  title,
  publishedAt,
  author,
  onPress,
}) => {
  const handlePress = () => {
    onPress(id, title);
  };

  return (
    <TouchableOpacity
      key={id}
      style={styles.itemContainer}
      onPress={handlePress}
    >
      <Text>{`Title: ${title}`}</Text>
      <Text>{`Published Date: ${publishedAt.toString()}`}</Text>
      <Text>{`Author: ${author}`}</Text>
    </TouchableOpacity>
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
