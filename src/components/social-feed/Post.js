import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import MessageBody from './MessageBody';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
    marginBottom: 3,
  },
});

const Post = ({
  date,
  authorName,
  bodyMessage,
  avatarUri,
}) => (
  <View style={styles.container}>
    <Avatar uri={avatarUri} />
    <MessageBody authorName={authorName} bodyMessage={bodyMessage} date={date} />
  </View>
);

Post.propTypes = {
  date: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  bodyMessage: PropTypes.string.isRequired,
  avatarUri: PropTypes.string.isRequired,
};

export default Post;
