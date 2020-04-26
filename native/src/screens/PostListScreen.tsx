import React from 'react';
import { Text, View, FlatList, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import PostItem from '../components/PostItem';
import AuthorCheckBox from '../components/AuthorCheckBox';
import { loadPosts } from '../redux/reducers/post';
import { toggleAuthorSelectStatus } from '../redux/reducers/filter';
import { getAuthors, getFilteredPosts, getSelectedAuthors } from '../selectors';

// Import types
import { RootState } from '../redux/reducers';
import { Post, Author } from '../util/types';
import { RootStackParamList } from '../App';

const isIos = Platform.OS === 'ios';

type PostsListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PostListScreen'
>;
interface IPostsListProps {
  isLoading: boolean;
  posts: Post[];
  authors: Author[];
  selectedAuthors: string[];
  navigation: PostsListScreenNavigationProp;
  loadPosts: () => void;
  toggleAuthorSelectStatus: (id: string) => void;
}

class PostsList extends React.Component<IPostsListProps> {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  handlePostPress = (id: string, title: string) => {
    const { navigation } = this.props;
    navigation.navigate('PostScreen', { postId: id, title });
  };

  handleAuthorSelectChange = (id: string) => {
    const { toggleAuthorSelectStatus } = this.props;
    toggleAuthorSelectStatus(id);
  };

  renderPostListItem = ({ item }: any) => {
    const { id, title, publishedAt, author } = item;
    const { name } = author;
    return (
      <PostItem
        id={id}
        title={title}
        publishedAt={publishedAt}
        author={name}
        onPress={this.handlePostPress}
      />
    );
  };

  postKeyExtractor = ({ id }: Post) => id;

  renderAuthor = ({ id, name }: Author) => {
    const { selectedAuthors } = this.props;
    return (
      <AuthorCheckBox
        key={id}
        info={{ id, name }}
        isChecked={selectedAuthors.includes(id)}
        onPress={this.handleAuthorSelectChange}
      />
    );
  };

  render() {
    const { isLoading, posts, authors } = this.props;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
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
  selectedAuthors: getSelectedAuthors(state),
});

const mapDispatchToProps = {
  loadPosts,
  toggleAuthorSelectStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
