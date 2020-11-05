import React from 'react';
import { View } from 'react-native';

import HorizontalDivider from '../ui/HorizontalDivider';
import Description from './meta/Description';
import PrimaryInfo from './meta/PrimaryInfo';
import SecondaryInfo from './meta/SecondaryInfo';

const VideoMeta = () => {
  return (
    <View>
      <PrimaryInfo
        title='A title of the video A title of the video A title of the video'
        views='455,213'
        uploadedAt='12/07/2020'
      />
      <HorizontalDivider />
      <SecondaryInfo
        imageUrl='https://p7.hiclipart.com/preview/871/1004/12/computer-icons-avatar-encapsulated-postscript-avatar-thumbnail.jpg'
        username='Uploader 1 very long uploader username'
        followers='23.2k'
      />
      <Description />
    </View>
  );
};

export default VideoMeta;
