import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MedCard = props => {
  const cardColor = props.color || '#e8115b';
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <View style={[styles.cardContainer, {backgroundColor: cardColor, height: expanded ? 200 : 100}]}>
        <View style={{paddingBottom: 10,flex: 0.5}}>
          <Text style={styles.text}>{props.text}</Text>
          {expanded && (
            <Text style={styles.additionalText}>
              {props.description}
            </Text>
          )}
        </View>
        <Image style={{width: 65, height: 65, flex: 0.2}} source={props.imageLink} />
        <View style={{flex: 0.1}} >
            <TouchableOpacity onPress={() => { /* Add functionality for bookmark button here */ }}>
                <View style={styles.bookmarkIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setExpanded(!expanded)}}>
                <View style={[styles.triangle, 
                    {marginTop: expanded ? 125 : 35, 
                    transform: expanded ? [{ rotate: '0deg' }]:[{ rotate: '180deg' }]}]} />
            </TouchableOpacity>
        </View>
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
  additionalText: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'left'
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#f1f1f1',
    marginTop: 50,
    transform: [{ rotate: '180deg' }],
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderTopWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: '#f1f1f1',
    borderRightColor: '#f1f1f1',
    borderTopColor: '#f1f1f1',
    borderBottomColor: 'transparent',
  },
});

export default MedCard;
