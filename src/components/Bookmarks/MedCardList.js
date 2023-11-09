import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import MedCard from './MedCard';

const MedCardList = props => {
  return (
    <>
      <View>
        {props.data.map(item => (
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
    </>
  );
};

export default MedCardList;
