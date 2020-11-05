import React, { useRef } from 'react';
import { Animated } from 'react-native';
import Control from '../Control';

const AnimatedControl = ({ callback, icon }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const scaleIn = () => {
    Animated.timing(scale, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <Control
      callback={() => {
        callback();
        scaleIn();
      }}
    >
      <Animated.View style={{ scaleX: scale, scaleY: scale }}>
        {icon}
      </Animated.View>
    </Control>
  );
};

export default AnimatedControl;
