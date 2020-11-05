import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

const AppButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <AppText style={{ textTransform: 'uppercase', letterSpacing: 0.6 }}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff3565',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});

export default AppButton;
