import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 3,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
  },
  message: {
    fontSize: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  date: {
    fontSize: 10,
  },
});

const MessageBody = ({ date, authorName, bodyMessage }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{authorName}</Text>
    <Text style={styles.message}>{bodyMessage}</Text>
    <View style={styles.dateContainer}>
      <Text style={styles.date}>
        {date}
      </Text>
    </View>
  </View>
);

MessageBody.propTypes = {
  date: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  bodyMessage: PropTypes.string.isRequired,
};

export default MessageBody;
