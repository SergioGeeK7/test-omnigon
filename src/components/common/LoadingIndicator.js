import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default arrayName => Component => (props) => {
  const isEmpty = !props[arrayName] || props[arrayName].length === 0;
  return isEmpty ?
    <ActivityIndicator
      size="large"
      style={styles.indicator}
    /> : <Component {...props} />;
};
