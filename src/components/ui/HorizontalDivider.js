import React from 'react';
import { View } from 'react-native';

const getSize = (size) => {
  switch (size) {
    case 'small':
      return 1;
    case 'medium':
      return 3;
    case 'large':
      return 6;
    default:
      return 1;
  }
};

const HorizontalDivider = ({ size = 'small' }) => {
  return (
    <View
      style={{
        borderColor: '#555',
        borderTopWidth: getSize(size),
        width: '100%',
        marginVertical: 20,
      }}
    />
  );
};

export default HorizontalDivider;
