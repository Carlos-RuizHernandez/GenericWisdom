import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import pillIcon from '../../images/pills.png';
import bottleIcon from '../../images/bottle.png';
import MedCardList from '../../components/Bookmarks/MedCardList';

const BookmarkedMedicineList = [
  {name: 'Advil', color: '#e8115b', image: pillIcon, description: "Check how this works\nmore on this line"},
  {name: 'Benadryl', color: '#1e3264', image: bottleIcon, description: ""},
  {name: 'Tylenol', color: '#006450', image: bottleIcon, description: ""},
  {name: 'Zyrtec', color: '#8c1932', image: pillIcon, description: ""},
];

const Bookmarks = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <StatusBar backgroundColor={'#353535'} />
      <View>
        <Text style={styles.header}>Bookmarks</Text>
        <Text style={styles.text}>Click downward arrow for more 
        information on specific medicine</Text>
        <MedCardList data={BookmarkedMedicineList} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});

export default Bookmarks;
