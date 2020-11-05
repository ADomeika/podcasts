import React from 'react';
import { PauseIcon, PlayIcon } from '../assets/icons';
import Control from '../Control';

const PlayPause = ({ callback, isVideoPlaying }) => {
  return (
    <Control callback={callback}>
      {isVideoPlaying ? <PauseIcon /> : <PlayIcon />}
    </Control>
  );
};

export default PlayPause;
