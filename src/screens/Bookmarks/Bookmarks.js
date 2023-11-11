import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import pillIcon from '../../images/pills.png';
import bottleIcon from '../../images/bottle.png';
import MedCardList from '../../components/Bookmarks/MedCardList';

const BookmarkedMedicineList = [
  {
    name: 'Advil',
    price: '12.99',
    generic: 'brand',
    color: '#8400e7',
    pros: ['Pain Relief', 'Fast Acting', 'Reliable', 'Popular'],
    cons: ['Diarrhea', 'Possible death'],
    rating: 4.5,
    description:
      'Advil is a widely used pain reliever known for its fast and effective results.',
    ingredients: ['Ibuprofen', 'Starch', 'Cellulose'],
    manufacturer: 'Pfizer',
  },
  {
    name: 'Claritin',
    price: '9.99',
    generic: 'brand',
    color: '#8400e7',
    pros: ['Non-Drowsy', 'Fast Acting', 'Reliable', 'Popular'],
    cons: ['Dry Mouth', 'Possible drowsiness'],
    rating: 4.2,
    description:
      'Claritin is a popular antihistamine used for allergy relief without causing drowsiness.',
    ingredients: ['Loratadine', 'Calcium', 'Stearic Acid'],
    manufacturer: 'Bayer',
  },
  {
    name: 'Benadryl',
    price: '7.99',
    generic: 'generic',
    color: '#8400e7',
    pros: [
      'prevents nausea',
      'prevents dizziness',
      'treats sneezing',
      'treats runny nose',
      'prevents other allergy symptoms',
    ],
    cons: ['upset stomach', 'Possible drowsiness'],
    rating: 3.6,
    description:
      'Benadryl is an antihistamine that reduces the effects of natural chemical histamine in the body.',
    ingredients: ['Carnauba Wax', 'Hypromellose', 'Magnesium stearate'],
    manufacturer: 'Pfizer',
  },
  {
    name: 'Pepto Bismol',
    price: '5.95',
    generic: 'brand',
    color: '#8400e7',
    pros: ['Controls: diarrhoea'],
    cons: ['tongue turning black', 'black poo'],
    rating: 2.0,
    description:
      'used for heartburn and acid reflux, indigestion, diarrhoea and feeling sick (nausea)',
    ingredients: ['Bismuth Subsalicylate'],
    manufacturer: 'Procter & Gamble company',
  },
];

const Bookmarks = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <StatusBar backgroundColor={'#353535'} />
      <View>
        <Text style={styles.header}>Bookmarks</Text>
        <Text style={styles.text}>
          Click downward arrow for more information on specific medicine
        </Text>
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
