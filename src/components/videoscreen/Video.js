import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppText from '../ui/AppText';
import abbreviateNumber from '../../utils/abbreviateNumber';

const Video = ({ item }) => {
  const { thumbnail, title, views, channel, channelImage, followers } = item;

  const formattedViews = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const formattedFollowers = abbreviateNumber(followers);

  const handleVideoPress = (item) => {
    console.log(item);
    // navigate to specific video
  };

  const handleChannelPress = (channel) => {
    console.log(channel);
    // navigate to specific channel
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleVideoPress(item)}
    >
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />

      <View style={styles.meta}>
        <View style={styles.titleAndViews}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.views}>{formattedViews} views</AppText>
        </View>

        <TouchableOpacity
          style={styles.channelAndFollowersWrapper}
          onPress={() => handleChannelPress(channel)}
        >
          <View style={styles.channelAndFollowers}>
            <AppText style={styles.channel}>{channel}</AppText>
            <AppText style={styles.followers}>
              {formattedFollowers} Followers
            </AppText>
          </View>
          <View style={styles.channelImageWrapper}>
            <Image
              source={{
                uri: channelImage,
              }}
              style={styles.channelImage}
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  channelImage: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  meta: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleAndViews: {
    marginVertical: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  views: {
    color: '#888',
  },
  channelAndFollowersWrapper: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  channelAndFollowers: {
    marginRight: 15,
  },
  followers: {
    color: '#888',
  },
});

export default Video;
