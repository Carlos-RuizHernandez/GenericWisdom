import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const HomeCard = props => {
  const cardColor = props.color || '#e8115b';
  return (
    <View>
      <View style={[styles.cardContainer, {backgroundColor: cardColor}]}>
        <View style={{paddingBottom: 10}}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <Image style={{width: 65, height: 65}} source={props.imageLink} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#e8115b',
    borderRadius: 7,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    verticalAlign: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1f1f1',
    textAlign: 'left',
  },
});

export default HomeCard;
