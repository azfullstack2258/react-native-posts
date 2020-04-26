import { RootState } from '../redux/reducers';
import { Author } from '../util/types';

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
