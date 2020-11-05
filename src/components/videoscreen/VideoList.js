import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

import Video from './Video';

const videos = [
  {
    id: '1',
    title: 'Title one',
    views: 455,
    channel: 'Uploader 1',
    channelImage:
      'https://p7.hiclipart.com/preview/871/1004/12/computer-icons-avatar-encapsulated-postscript-avatar-thumbnail.jpg',
    thumbnail:
      'https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new-1068x510.jpg',
    followers: 55,
  },
  {
    id: '2',
    title: 'Title Two',
    views: 851123,
    channel: 'Uploader 2',
    channelImage:
      'https://p7.hiclipart.com/preview/871/1004/12/computer-icons-avatar-encapsulated-postscript-avatar-thumbnail.jpg',
    thumbnail:
      'https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new-1068x510.jpg',
    followers: 3299999,
  },
  {
    id: '3',
    title: 'Title Three',
    views: 851123,
    channel: 'Uploader 3',
    channelImage:
      'https://p7.hiclipart.com/preview/871/1004/12/computer-icons-avatar-encapsulated-postscript-avatar-thumbnail.jpg',
    thumbnail:
      'https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new-1068x510.jpg',
    followers: 345200,
  },
];

const url = `https://www.googleapis.com/youtube/v3/videos/?part=snippet%2CfileDetails%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCLtfH_b8u5ZQAiQSQz3tVpsvwdlzKXHbM`;

const VideoList = ({ data = videos, ...otherProps }) => {
  useEffect(() => {
    const getVideos = async () => {
      const { data } = await axios.get(url);
      console.log(data);
    };
    getVideos();
  }, []);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{ padding: 20 }}
      data={data}
      keyExtractor={(video) => video.id.toString()}
      renderItem={({ item }) => <Video item={item} />}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoList;
