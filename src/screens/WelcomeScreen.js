import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
