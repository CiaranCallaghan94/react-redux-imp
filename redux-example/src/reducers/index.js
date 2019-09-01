import {combineReducers} from 'redux';
import postReducer from './postReducer';
import cogReducer from './cogReducer';

export default combineReducers({
  posts: postReducer,
  cognitots: cogReducer
});
