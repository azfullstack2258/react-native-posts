import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/post';
import { fetchPosts } from '../../service/post';

function* fetchPostsSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  const res = yield call(fetchPosts);

  if (res && res.status === 200) {
    const { data } = res;
    yield put({
      type: actionTypes.loadPostsSucceed,
      payload: data,
    });
  } else {
    yield put({ type: actionTypes.loadPostsFail });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchPosts() {
  yield takeLatest(actionTypes.loadPostsRequest, fetchPostsSaga);
}
