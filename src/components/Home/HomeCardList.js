import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import HomeCard from './HomeCard';

const HomeCardList = props => {
  return (
    <>
      <View>
        {props.data.map(item => (
          <View key={item.name}>
            <HomeCard
              text={item.name}
              imageLink={item.image}
              color={item.color}
            />
          </View>
        ))}
      </View>
    </>
  );
};

export default HomeCardList;
