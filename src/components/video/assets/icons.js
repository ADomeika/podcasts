import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Spinner = () => <ActivityIndicator color='white' size='large' />;

export const ReplayIcon = () => (
  <MaterialIcons name='replay' size={40} color='white' style={styles.icon} />
);

export const FullscreenEnterIcon = () => (
  <MaterialIcons
    name='fullscreen'
    size={40}
    color='white'
    style={styles.icon}
  />
);

export const FullscreenExitIcon = () => (
  <MaterialIcons
    name='fullscreen-exit'
    size={40}
    color='white'
    style={styles.icon}
  />
);

export const FavoriteIcon = ({ name = 'favorite-border', style }) => (
  <MaterialIcons
    name={name}
    size={40}
    color='white'
    style={[styles.icon, style]}
  />
);

export const RewindIcon = ({ style }) => (
  <MaterialIcons
    name='replay-5'
    size={40}
    color='white'
    style={[styles.icon, style]}
  />
);

export const ForwardIcon = ({ style }) => (
  <MaterialIcons
    name='forward-5'
    size={40}
    color='white'
    style={[styles.icon, style]}
  />
);

export const PlayIcon = () => (
  <MaterialIcons
    name='play-arrow'
    size={40}
    color='white'
    style={styles.icon}
  />
);

export const PauseIcon = () => (
  <MaterialIcons name='pause' size={40} color='white' style={styles.icon} />
);

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
  },
});
