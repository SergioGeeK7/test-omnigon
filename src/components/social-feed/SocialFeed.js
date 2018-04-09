import React from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from './Post';
import PostSeparator from './PostSeparator';
import LoadingIndicator from '../common/LoadingIndicator';
import * as Actions from '../../actions/socialFeedActions';
import { updateInterval } from '../../../config.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class SocialFeed extends React.Component {
  state = {
    page: 1,
    THRESHOLD: 0.5,
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.refreshSocialFetch();
    }, updateInterval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onEndReached = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.props.getSocialFeedData(this.state.page);
      },
    );
  }
  keyExtractor = item => item.idPost
  renderItem = ({ item }) => <Post {...item} />;
  renderFooter = () => {
    if (!this.props.isLoading) {
      return null;
    }
    return <ActivityIndicator size="small" />;
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.data}
        renderItem={this.renderItem}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={this.state.THRESHOLD}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={this.renderFooter}
        ItemSeparatorComponent={PostSeparator}
      />
    );
  }
}

SocialFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    idPost: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    bodyMessage: PropTypes.string.isRequired,
    avatarUri: PropTypes.string.isRequired,
  })).isRequired,
  getSocialFeedData: PropTypes.func.isRequired,
  refreshSocialFetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStorageToProps = ({ socialFeedPosts }) => ({
  data: socialFeedPosts.data,
  isLoading: socialFeedPosts.isLoading,
});

export default connect(mapStorageToProps, Actions)(LoadingIndicator('data')(SocialFeed));
