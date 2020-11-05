import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ category }) => {
  return (
    <View style={styles.container}>
      <View style={styles.category}>
        <Text style={styles.title}>{category}</Text>
        <FontAwesome
          name='angle-down'
          size={24}
          color='white'
          style={styles.icon}
        />
      </View>
      <View style={styles.search}>
        <FontAwesome name='search' size={24} color='white' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  category: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
});

export default Header;
