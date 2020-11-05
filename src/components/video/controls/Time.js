import React from 'react';
import { Text } from 'react-native';
import getMMSSFromMillis from '../../../utils/getMMSSFromMillis';

const Time = ({ time }) => {
  return (
    <Text style={{ color: '#fff', marginRight: 5, fontSize: 18 }}>
      {getMMSSFromMillis(time)}
    </Text>
  );
};

export default Time;
