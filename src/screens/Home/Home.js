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
  {name: '', color: '#e8115b', image: pillIcon},
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
  {
    name: 'Ibuprofen',
    price: '8.39',
    generic: 'generic',
    color: '#8400e7',
    pros: ['lower-cost generics', 'Works well for fever, pain, and swelling'],
    cons: [
      'Heart attack and stroke',
      'Kidney damage',
      'Stomach bleeding and ulcers',
    ],
    rating: 4.0,
    description:
      'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) thats used to temporarily relieve fever, pains, and aches in adults and children.',
    ingredients: [
      'Lactose',
      'Maize Starch',
      'Hypromellose',
      'Sodium Starch Glycollate',
    ],
    manufacturer: 'BASF ',
  },
  {
    name: 'Tylenol',
    price: '2.25',
    generic: 'generic',
    color: '#8400e7',
    pros: [
      'relieve mild aches or pain and lower fever',
      ' lower-cost generic ',
    ],
    cons: ["Doesn't help with inflammation and swelling", 'Liver damage'],
    rating: 3.5,
    description: 'lower fever and relieve mild pain in adults and children',
    ingredients: ['Acetaminophen'],
    manufacturer: 'McNeil Laboratories, Inc',
  },
  {
    name: 'Zyrtec',
    price: '3.16',
    generic: 'generic',
    color: '#8400e7',
    pros: ['Lower risk of sleepiness', 'relieving allergy'],
    cons: ['Sleepiness', 'liver or kidney problems'],
    rating: 4.6,
    description:
      'Cetirizine (Zyrtec) works well for allergies and usually causes less side',
    ingredients: ['Cetirizine'],
    manufacturer: 'Johnson & Johnson Consumer Inc',
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
        <HomeCardList data={popularMedicineList} navigation={navigation} />
      </View>
      <View>
        <Text style={styles.header}>Recommended</Text>
        <HomeCardList data={recommendedMedicineList} navigation={navigation}/>
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
