import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppButton from '../../ui/AppButton';
import AppText from '../../ui/AppText';

const SecondaryInfo = ({ imageUrl, username, followers }) => {
  return (
    <View style={styles.container}>
      <View style={styles.channel}>
        <View>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={{ flex: 1 }}>
          <AppText>{username}</AppText>
          <AppText style={styles.followers}>{followers} Followers</AppText>
        </View>
      </View>

      <View>
        <AppButton title={`${followers} follow`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  channel: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 15,
    width: 30,
    height: 30,
    marginRight: 10,
  },
  followers: {
    fontSize: 12,
    color: '#666',
  },
});

export default SecondaryInfo;
