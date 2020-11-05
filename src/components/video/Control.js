import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const Control = ({ callback, children, style, ...otherProps }) => (
  <TouchableOpacity
    {...otherProps}
    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    onPress={callback}
    style={[{ marginHorizontal: 10 }, style]}
  >
    <View>{children}</View>
  </TouchableOpacity>
);

export default Control;
