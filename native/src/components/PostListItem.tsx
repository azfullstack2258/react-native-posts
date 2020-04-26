import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import moment from 'moment';

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
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postDetail}>
        {`${author}, ${moment(publishedAt).format('YYYY/MM/DD')}`}
      </Text>
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
  postTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  postDetail: {
    fontStyle: 'italic',
    fontSize: 10,
  },
});

export default PostListItem;
