import { createSelector } from 'reselect';
import { RootState } from '../redux/reducers';
import { Author, Post } from '../util/types';

export const getPosts = (state: RootState): Post[] => state.post.posts;
export const getSelectedAuthors = (state: RootState): string[] =>
  state.filter.selectedAuthorIds;

export const getFilteredPosts = createSelector(
  getPosts,
  getSelectedAuthors,
  (posts: Post[], selectedAuthors: string[]) =>
    posts.filter(
      ({ author: { id } }) =>
        (selectedAuthors.length === 0 && true) || selectedAuthors.includes(id)
    )
);

export const getAuthors = (state: RootState): Author[] => {
  const authors: Author[] = [];
  const map = new Map();
  const { posts } = state.post;

  for (const item of posts) {
    const { author } = item;
    const { id } = author;
    if (!map.has(id)) {
      map.set(id, true);
      authors.push(author);
    }
  }

  return authors;
};
