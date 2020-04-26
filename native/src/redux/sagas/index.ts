import { all } from 'redux-saga/effects';
import { watchPosts } from './postSaga';

export default function* rootSaga() {
  yield all([watchPosts()]);
}
