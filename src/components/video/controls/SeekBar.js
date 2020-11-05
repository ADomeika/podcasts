import Slider from '@react-native-community/slider';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const SeekBar = ({
  minimumValue = 0,
  maximumValue = 1,
  value = 0,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
}) => {
  return (
    <TouchableWithoutFeedback
    // onPress={onSeekBarTap}
    >
      <Slider
        style={{ flex: 1, marginHorizontal: 10 }}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        value={value}
        onValueChange={onValueChange}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='#000'
      />
    </TouchableWithoutFeedback>
  );
};

export default SeekBar;
