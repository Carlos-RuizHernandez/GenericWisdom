import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import pillIcon from '../../images/pills.png';
import bottleIcon from '../../images/bottle.png';
import HomeCardList from '../../components/navigation/Home/HomeCardList';

const popularMedicineList = [
  {name: 'Advil', color: '#e8115b', image: pillIcon},
  {name: 'Benadryl', color: '#1e3264', image: bottleIcon},
  {name: 'Tylenol', color: '#006450', image: bottleIcon},
  {name: 'Zyrtec', color: '#8c1932', image: pillIcon},
];

const recommendedMedicineList = [
  {name: 'Claritin', color: '#8400e7', image: pillIcon},
  {name: 'Pepto Bismol', image: bottleIcon},
  {name: 'Ibuprofen', color: '#0d73ec', image: pillIcon},
];

const Home = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <StatusBar backgroundColor={'#353535'} />
      <View>
        <Text style={styles.header}>Popular Brands</Text>
        <HomeCardList data={popularMedicineList} />
      </View>
      <View>
        <Text style={styles.header}>Recommended</Text>
        <HomeCardList data={recommendedMedicineList} />
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
});

export default Home;
