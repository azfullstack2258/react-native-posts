import { createAction, handleActions } from 'redux-actions';
import { Post } from '../../util/types';

export const actionTypes = {
  loadPostsRequest: 'product/load_posts_request',
  loadPostsSucceed: 'product/load_posts_succeed',
  loadPostsFail: 'product/load_posts_fail',
  selectPost: 'product/select_post',
  setLoadingStatus: 'product/set_loading_status',
};

// Define Types
interface IPostReducer {
  posts: Array<Post>;
  selectedPost: Post | null;
  isLoading: boolean;
}
type SelectPostPayload = Post | null;
type LoadPostsSucceedPayload = Array<Post>;
type SetLoadingStatusPayload = boolean;
type CombinedPayloads =
  | SelectPostPayload
  | LoadPostsSucceedPayload
  | SetLoadingStatusPayload;

export const loadPosts = createAction(actionTypes.loadPostsRequest);

const defaultState: IPostReducer = {
  isLoading: false,
  posts: [],
  selectedPost: null,
};

export default handleActions<IPostReducer, CombinedPayloads>(
  {
    [actionTypes.selectPost]: (state, { payload }): IPostReducer => ({
      ...state,
      selectedPost: payload as Post | null,
    }),
    [actionTypes.loadPostsSucceed]: (
      state: IPostReducer,
      { payload }
    ): IPostReducer => ({
      ...state,
      posts: payload as Post[],
    }),
    [actionTypes.setLoadingStatus]: (
      state: IPostReducer,
      { payload }
    ): IPostReducer => ({ ...state, isLoading: payload as boolean }),
  },
  defaultState
);
