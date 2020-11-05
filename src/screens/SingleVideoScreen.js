import React from 'react';
import { View } from 'react-native';

import VideoMeta from '../components/video/VideoMeta';
import VideoPlayer from '../components/video/VideoPlayer';
import VideoList from '../components/videoscreen/VideoList';

const SingleVideoScreen = () => {
  return (
    <View style={{ backgroundColor: '#121430', flex: 1 }}>
      <VideoPlayer sourceUri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' />
      <VideoList ListHeaderComponent={<VideoMeta />} />
    </View>
  );
};

export default SingleVideoScreen;
