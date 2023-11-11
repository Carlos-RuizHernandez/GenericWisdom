import React, {Component, useState} from 'react';
import {Text, View, StatusBar, StyleSheet, TextInput, FlatList, ScrollView} from 'react-native';
import {Icon} from '@rneui/themed';
import SearchBar from '../../components/Search/SearchBar.js';
import ResultsList from '../../components/Search/ResultsList.js'

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#353535'} />
      <SearchBar navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },

});

export default Search;
