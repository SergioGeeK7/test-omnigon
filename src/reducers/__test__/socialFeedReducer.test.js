import socialFeedReducer, { defaultState } from '../socialFeedReducer';
import {
  GET_DATA_SOCIAL_FEED,
  TOGGLE_LOADING_INDICATOR_SOCIAL_FEED,
  CLEAR_DATA_SOCIAL_FEED,
} from '../../actions/types';
import mockData from './mockData.json';
import { avatarUri } from '../../../config.json';

describe('socialFeedReducer test', () => {
  it('should store data', () => {
    expect(socialFeedReducer(defaultState, {
      type: GET_DATA_SOCIAL_FEED,
      payload: {
        data: mockData,
      },
    })).toEqual({
      ...defaultState,
      data: [{
        authorName: mockData[0].user.name,
        bodyMessage: mockData[0].text,
        date: '2017-12-29 14:15:03',
        idPost: mockData[0].id_str,
        avatarUri,
      }],
    });
  });

  it('should toggle loading indicator', () => {
    expect(socialFeedReducer(defaultState, {
      type: TOGGLE_LOADING_INDICATOR_SOCIAL_FEED,
      payload: {
        isLoading: true,
      },
    })).toEqual({
      ...defaultState,
      isLoading: true,
    });
  });

  it('should clear of data social feed', () => {
    expect(socialFeedReducer(defaultState, {
      type: CLEAR_DATA_SOCIAL_FEED,
    })).toEqual({
      ...defaultState,
      data: [],
    });
  });
});
