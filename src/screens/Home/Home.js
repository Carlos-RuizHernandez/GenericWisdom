import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import pillIcon from '../../images/pills.png';
import bottleIcon from '../../images/bottle.png';
import HomeCardList from '../../components/Home/HomeCardList';
import {useUpdateComparisonContext} from '../../components/ComparisonContext';

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

const brandInfoData = [
  {
    name: 'Advil',
    price: '12.99',
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
    pros: ['Non-Drowsy', 'Fast Acting', 'Reliable', 'Popular'],
    cons: ['Dry Mouth', 'Possible drowsiness'],
    rating: 4.2,
    description:
      'Claritin is a popular antihistamine used for allergy relief without causing drowsiness.',
    ingredients: ['Loratadine', 'Calcium', 'Stearic Acid'],
    manufacturer: 'Bayer',
  },
];

const Home = ({navigation}) => {
  const updateBrands = useUpdateComparisonContext();

  const handleBrandSelection = (brandName, brandInfo) => {
    updateBrands(brandName, brandInfo);
  };
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#444654'}]}
          onPress={() => handleBrandSelection('brand1', brandInfoData[0])}>
          <Text style={styles.buttonText}>Select Brand 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#444654'}]}
          onPress={() => handleBrandSelection('brand2', brandInfoData[1])}>
          <Text style={styles.buttonText}>Select Brand 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#444654'}]}
          onPress={() => navigation.navigate('Compare')}>
          <Text style={styles.buttonText}>Compare</Text>
        </TouchableOpacity>
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
  button: {
    marginVertical: 20,
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
