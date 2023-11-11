import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import MedCard from './MedCard';

const MedCardList = props => {
  return (
    <>
      <View>
        {props.data.map(item => (
          <View key={item.name}>
            <MedCard data={item} />
          </View>
        ))}
      </View>
    </>
  );
};

export default MedCardList;
