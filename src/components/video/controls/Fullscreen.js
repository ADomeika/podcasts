import React from 'react';
import { FullscreenEnterIcon, FullscreenExitIcon } from '../assets/icons';
import Control from '../Control';

const Fullscreen = ({ callback, inFullscreen }) => {
  return (
    <Control callback={callback}>
      {inFullscreen ? <FullscreenExitIcon /> : <FullscreenEnterIcon />}
    </Control>
  );
};

export default Fullscreen;
