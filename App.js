import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/reducers';
import SocialFeed from './src/components/social-feed/SocialFeed';
import Header from './src/components/common/Header';
import { getSocialFeedData } from './src/actions/socialFeedActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  page: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'flex-start',
  },
});

const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
store.dispatch(getSocialFeedData(1));

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Header title="Social Feed OMNIGON" />
      <View style={styles.page}>
        <SocialFeed />
      </View>
    </View>
  </Provider>
);
