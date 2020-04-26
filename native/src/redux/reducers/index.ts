import { combineReducers } from 'redux';
import postReducer from './post';
import filterReducer from './filter';

const rootReducer = combineReducers({
  post: postReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
