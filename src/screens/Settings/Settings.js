import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353535',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});

export default Settings;
