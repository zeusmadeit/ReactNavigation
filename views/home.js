import React from 'react';
import { StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
  };


export default HomeScreen;