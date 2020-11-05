import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Video } from 'expo-av';

import VideoControls from './VideoControls';
import useVideo from '../../hooks/useVideo';

const VideoPlayer = ({ sourceUri }) => {
  const [controlsShowing, setControlsShowing] = useState(false);
  const {
    playbackInstancePosition,
    playbackInstanceDuration,
    isFavorite,
    isVideoPlaying,
    setPlaybackInstancePosition,
    setPlaybackInstance,
    onPlaybackStatusUpdate,
    onAddToFavorites,
    onRewindPress,
    onForwardPress,
    togglePlay,
    onSeekSliderSlidingStart,
    onSeekSliderSlidingComplete,
  } = useVideo();

  const fadeOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const toggleControls = () => {
    controlsShowing ? fadeOut() : fadeIn();
    setControlsShowing(!controlsShowing);
  };

  return (
    <View
      style={{
        backgroundColor: '#000',
        width: '100%',
        height: 300,
      }}
    >
      <Video
        source={{ uri: sourceUri }}
        ref={setPlaybackInstance}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        resizeMode='cover'
        style={{ flex: 1 }}
        shouldPlay={isVideoPlaying}
      />

      <Animated.View style={[styles.animatedView, { opacity: fadeOpacity }]}>
        <TouchableOpacity
          onPress={toggleControls}
          style={styles.touchableOpacity}
        >
          {controlsShowing && (
            <VideoControls
              addToFavorites={onAddToFavorites}
              isFavorite={isFavorite}
              rewind={onRewindPress}
              forward={onForwardPress}
              togglePlay={togglePlay}
              isVideoPlaying={isVideoPlaying}
              playbackInstancePosition={playbackInstancePosition}
              playbackInstanceDuration={playbackInstanceDuration}
              setPlaybackInstancePosition={setPlaybackInstancePosition}
              onSeekSliderSlidingStart={onSeekSliderSlidingStart}
              onSeekSliderSlidingComplete={onSeekSliderSlidingComplete}
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  touchableOpacity: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoPlayer;
