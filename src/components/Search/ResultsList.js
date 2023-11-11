import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import MedCard from '../Bookmarks/MedCard';
import bottleIcon from '../../images/bottle.png';
import pillIcon from '../../images/pills.png';
import { PainList, brandInfoData } from '../../data.js';
import {
  useComparisonContext, 
  useUpdateComparisonContext
} from '../ComparisonContext';

const ResultsList = ({data, navigation}) => {
    // const filteredBySymptom = data.filter(item => {
    //     item.symptom == 'Pain'
    // });
    const updateBrands = useUpdateComparisonContext();
    const brands = useComparisonContext();

    const handleBrandSelection = (brandName, brandInfo) => {
        updateBrands(brandName, brandInfo);
    };
    const newPainList = PainList.filter((item) => 
      item.name !== brands.brand1.name
    );
    return (
      <ScrollView>
        <View>
          {newPainList.map(item => (
            
            <View key={item.name}>
              <TouchableOpacity
                onPress={() => {handleBrandSelection('brand2', 
                newPainList.filter((x) => item.name == x.name)[0]);
                navigation.navigate("Compare");
              }}>
                <MedCard
                  data={item}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView >
    );
  };

export default ResultsList;

// for later
{/* <>
  <View>
    {filteredBySymptom.map(item => (
      <View key={item.name}>
        <MedCard
          text={item.name}
          imageLink={item.image}
          color={item.color}
          description = {item.description}
        />
      </View>
    ))}
  </View>
</> */}