import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginBottom: 3,
  },
  textStyle: {
    fontSize: 20,
  },
};

const Header = ({ title }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
