import {
  GET_DATA_SOCIAL_FEED,
  CLEAR_DATA_SOCIAL_FEED,
  TOGGLE_LOADING_INDICATOR_SOCIAL_FEED,
} from './types';
import { feedUrl, numerOfPost } from '../../config.json';

export const getSocialFeedData = page => (dispatch) => {
  const limit = numerOfPost * page;
  dispatch({
    type: TOGGLE_LOADING_INDICATOR_SOCIAL_FEED,
    payload: {
      isLoading: true,
    },
  });
  fetch(`${feedUrl}?limit=${limit}`)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: TOGGLE_LOADING_INDICATOR_SOCIAL_FEED,
        payload: {
          isLoading: false,
        },
      });
      dispatch({
        type: GET_DATA_SOCIAL_FEED,
        payload: {
          data,
        },
      });
    });
};

export const refreshSocialFetch = () => (dispatch) => {
  dispatch({
    type: CLEAR_DATA_SOCIAL_FEED,
  });
  getSocialFeedData(1)(dispatch);
};
