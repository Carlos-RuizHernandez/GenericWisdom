import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {useComparisonContext} from '../components/ComparisonContext';

const CompareScreen = ({navigation}) => {
  const brands = useComparisonContext();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#353535'} />
      <View style={styles.brandContainer}>
        <Text style={styles.header}>{brands.brand1.name}</Text>
        <View style={styles.section}>
          <Text style={styles.text}>Price: {brands.brand1.price} (USD)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Rating: {brands.brand1.rating} / 5</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Manufacturer: {brands.brand1.manufacturer}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Description:</Text>
          <Text style={styles.body}>{brands.brand1.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Ingredients: {brands.brand1.ingredients.join(', ')}
          </Text>
        </View>
      </View>
      <View style={styles.brandContainer}>
        <Text style={styles.header}>{brands.brand2.name}</Text>
        <View style={styles.section}>
          <Text style={styles.text}>Price: {brands.brand2.price} (USD)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Rating: {brands.brand2.rating} / 5</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Manufacturer: {brands.brand2.manufacturer}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Description:</Text>
          <Text style={styles.body}>{brands.brand2.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Ingredients:</Text>
          <Text style={styles.body}>
            {brands.brand2.ingredients.join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    paddingVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
    marginBottom: 10,
    paddingLeft: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },
  body: {
    fontSize: 12,
    color: '#f1f1f1',
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: '#626262',
    borderBottomColor: '#626262',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#1e1f22',
  },
  brandContainer: {
    height: '50%',
  },
});

export default CompareScreen;
