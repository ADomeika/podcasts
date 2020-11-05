import React from 'react';
import { StyleSheet, View } from 'react-native';
import SingleVideoScreen from './src/screens/SingleVideoScreen';
import VideoScreen from './src/screens/VideoScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <VideoScreen /> */}
      <SingleVideoScreen />
      {/* <WelcomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
