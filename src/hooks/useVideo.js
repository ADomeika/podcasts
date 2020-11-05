import { useState } from 'react';

const useVideo = () => {
  const [playbackInstance, setPlaybackInstance] = useState(null);
  const [playbackInstancePosition, setPlaybackInstancePosition] = useState(0);
  const [playbackInstanceDuration, setPlaybackInstanceDuration] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setIsVideoPlaying(false);
    }
    setPlaybackInstancePosition(status.positionMillis);
    setPlaybackInstanceDuration(status.durationMillis);
  };

  const onAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  const onRewindPress = async () => {
    if (playbackInstance !== null) {
      if (playbackInstancePosition > 5000) {
        await playbackInstance.setStatusAsync({
          positionMillis: playbackInstancePosition - 5000,
        });
      } else {
        await playbackInstance.setStatusAsync({ positionMillis: 0 });
      }
    }
  };

  const onForwardPress = async () => {
    if (playbackInstance !== null) {
      if (playbackInstanceDuration < playbackInstancePosition + 5000) {
        await playbackInstance.setStatusAsync({
          positionMillis: playbackInstanceDuration,
        });
      } else {
        await playbackInstance.setStatusAsync({
          positionMillis: playbackInstancePosition + 5000,
        });
      }
    }
  };

  const togglePlay = async () => {
    if (playbackInstance !== null) {
      if (isVideoPlaying) {
        await playbackInstance.pauseAsync();
        setIsVideoPlaying(false);
      } else {
        await playbackInstance.playAsync();
        setIsVideoPlaying(true);
      }
    }
  };

  const onSeekSliderSlidingStart = async () => {
    if (playbackInstance !== null) {
      if (isVideoPlaying) {
        setIsVideoPlaying(false);
        await playbackInstance.pauseAsync();
      }
    }
  };

  const onSeekSliderSlidingComplete = async (pos) => {
    if (playbackInstance !== null) {
      setPlaybackInstancePosition(pos);
      setIsVideoPlaying(true);
      await playbackInstance.setStatusAsync({
        positionMillis: pos,
        shouldPlay: true,
      });
    }
  };

  return {
    playbackInstancePosition,
    playbackInstanceDuration,
    isVideoPlaying,
    isFavorite,
    setPlaybackInstancePosition,
    setPlaybackInstance,
    onPlaybackStatusUpdate,
    onAddToFavorites,
    onRewindPress,
    onForwardPress,
    togglePlay,
    onSeekSliderSlidingStart,
    onSeekSliderSlidingComplete,
  };
};

export default useVideo;
