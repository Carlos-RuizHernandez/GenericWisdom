import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookmarkInfo from './BookmarkInfo';
const MedCard = props => {
  console.log(props);
  const cardColor = props.color || '#e8115b';
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <View style={[styles.cardContainer, {backgroundColor: props.data.color}]}>
        <View style={{paddingBottom: 10, flex: 0.8}}>
          <Text style={styles.text}>{props.data.name}</Text>
          {expanded && <BookmarkInfo data={props.data} />}
        </View>
        <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              // add to bookmarks
            }}>
            <MaterialCommunityIcons
              name="cards-heart"
              color={'#f1f1f1'}
              size={32}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setExpanded(!expanded);
            }}>
            <MaterialCommunityIcons
              name={expanded ? 'chevron-up' : 'chevron-down'}
              color={'#f1f1f1'}
              size={42}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#e8115b',
    borderRadius: 7,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    verticalAlign: 'center',
    flex: 1,
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
    textAlign: 'left',
  },
  bookmarkIcon: {
    width: 45,
    height: 20,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default MedCard;
