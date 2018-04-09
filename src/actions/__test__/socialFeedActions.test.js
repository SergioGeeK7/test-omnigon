import mockStore from 'redux-mock-store';
import { getSocialFeedData, refreshSocialFetch } from '../socialFeedActions';

const store = mockStore({});
const response = '{}';

describe('socialFeedActions', () => {
  it('Get social feed data ACTION', () => {
    fetch.mockResponseSuccess(response);
    return store.dispatch(getSocialFeedData(1)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it('refresh social feed ACTION', () => {
    fetch.mockResponseSuccess(response);
    return store.dispatch(refreshSocialFetch()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
