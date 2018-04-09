import { GET_DATA_SOCIAL_FEED, CLEAR_DATA_SOCIAL_FEED, TOGGLE_LOADING_INDICATOR_SOCIAL_FEED } from './../actions/types';
import toLocalTime from '../helpers/toLocalTime';
import { avatarUri } from '../../config.json'; // an avatar just for the sake of the example

export const defaultState = { isLoading: false, data: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA_SOCIAL_FEED: {
      const data = action.payload.data.slice(state.data.length).reduce((array, current) => {
        array.push({
          authorName: current.user.name,
          bodyMessage: current.text,
          date: toLocalTime(current.created_at).toLocaleString(),
          idPost: current.id_str,
          avatarUri,
        });
        return array;
      }, [...state.data]);
      return { ...state, data };
    }
    case TOGGLE_LOADING_INDICATOR_SOCIAL_FEED:
      return { ...state, isLoading: action.payload.isLoading };
    case CLEAR_DATA_SOCIAL_FEED:
      return { ...state, data: [] };
    default:
      return state;
  }
};
