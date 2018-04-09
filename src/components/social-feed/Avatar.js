import React from 'react';
import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 80,
    width: 60,
    height: 60,
  },
});

const Avatar = ({ uri }) => (
  <Image style={styles.image} source={{ uri }} />
);

Avatar.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Avatar;
