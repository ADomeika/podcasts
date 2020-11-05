import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../../ui/AppText';

const PrimaryInfo = ({ title, views, uploadedAt }) => {
  return (
    <View>
      <AppText style={styles.title}>{title}</AppText>
      <View style={styles.viewsAndDate}>
        <AppText style={styles.meta}>{views} views</AppText>
        <AppText style={styles.meta}>Uploaded {uploadedAt}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  meta: {
    fontSize: 12,
    color: '#888',
  },
  viewsAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PrimaryInfo;
