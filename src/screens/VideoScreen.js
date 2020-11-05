import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/videoscreen/Header';
import VideoList from '../components/videoscreen/VideoList';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Header category='Trending' />

      <VideoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121430',
  },
});

export default VideoScreen;
