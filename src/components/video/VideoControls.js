import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import AddToFavorites from './controls/AddToFavorites';
import AnimatedIcon from './controls/AnimatedIcon';
import PlayPause from './controls/PlayPause';
import Fullscreen from './controls/Fullscreen';
import SeekBar from './controls/SeekBar';
import Time from './controls/Time';
import { ForwardIcon, RewindIcon } from './assets/icons';

const VideoControls = ({
  addToFavorites,
  isFavorite,
  rewind,
  forward,
  togglePlay,
  isVideoPlaying,
  playbackInstancePosition,
  playbackInstanceDuration,
  setPlaybackInstancePosition,
  onSeekSliderSlidingComplete,
  onSeekSliderSlidingStart,
}) => {
  const [inFullscreen, setInFullscreen] = useState(false);

  const switchToPortrait = async () => {
    setInFullscreen(false);
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  };

  const switchToLandscape = async () => {
    setInFullscreen(true);
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };

  return (
    <>
      <AddToFavorites callback={addToFavorites} isFavorite={isFavorite} />

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <AnimatedIcon callback={rewind} icon={<RewindIcon />} />

        <PlayPause callback={togglePlay} isVideoPlaying={isVideoPlaying} />

        <AnimatedIcon callback={forward} icon={<ForwardIcon />} />
      </View>

      {/* Bottom bar */}
      <Animated.View
        // pointerEvents={controlsState === ControlStates.Hidden ? 'none' : 'auto'}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          opacity: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 4,
          paddingHorizontal: 4,
          backgroundColor: 'transparent',
        }}
      >
        <Time time={playbackInstancePosition} />

        <SeekBar
          minimumValue={0}
          maximumValue={playbackInstanceDuration}
          value={playbackInstancePosition}
          onValueChange={setPlaybackInstancePosition}
          onSlidingComplete={onSeekSliderSlidingComplete}
          onSlidingStart={onSeekSliderSlidingStart}
          minimumTrackTintColor='#FFF'
          maximumTrackTintColor='#000'
        />

        <Time time={playbackInstanceDuration} />

        <Fullscreen
          callback={() => {
            inFullscreen ? switchToPortrait() : switchToLandscape();
          }}
          inFullscreen={inFullscreen}
        />
      </Animated.View>
    </>
  );
};

export default VideoControls;
