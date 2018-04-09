import { combineReducers } from 'redux';
import socialFeedReducer from './socialFeedReducer';

export default combineReducers({
  socialFeedPosts: socialFeedReducer,
});
