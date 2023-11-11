import React, {Component, useState, useContext} from 'react';
import {Text, View, StatusBar, StyleSheet, TextInput, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';


const SearchedItem = React.createContext(null);


const SearchBar = () => {
    const [input, setInput] = useState("Search");
    const [focused, setFocus] = useState(false);

    const brands = [
      {
        name: "tylenol",
        id: '1',
      },
      {
        name: "benadryl",
        id: '2',
      },
      {
        name: 'advil',
        id: '3',
      },
      {
        name: 'nyquil',
        id: '4',
      },
      {
        name: 'moltrin',
        id: '5',
      },
      {
        name: 'mucinex',
        id: '6'
      }
    ]

    const Item = ({title}) => {
      return (
        <>
          <TouchableOpacity 
            onPress={() => {setInput(title); setFocus(!focused)}}
            style={styles.item}
          >
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator}/>
        </>
      )
    }

    const filteredBrands = (text) => {
      let ret = brands.filter((item) => (item.name.startsWith(text)))
      return ret
    }

    return (
      <View>
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name='search' />
          <TextInput
              style={styles.textInput}
              value={input}
              defaultValue="Search"
              onChangeText={(text) => {setInput(text)}}
              onFocus={() => setFocus(!focused)}
          />
        </View>
        <FlatList // Search recommendations list
          data={focused ? filteredBrands(input) : []}
          renderItem={({item}) => 
            <Item 
                title={item.name} 
            />
          }
          keyExtractor={item => item.id}
          extraData={{focused, input}}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    searchSection: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgrey',
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 15,
    },
    searchIcon: {
      paddingLeft: 10,
    },
    textInput: {
      flexGrow: 1,
      backgroundColor: 'lightgrey',
      color: '#424242',
    },
    item: {
      backgroundColor: 'white',
      width: '95%',
      marginHorizontal: '2.5%'
    },
    title: {
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    separator: {
      height: 1,
      backgroundColor: 'black',
      width: '95%', // item.width
      marginHorizontal: '2.5%' // item.marginHorizontal
    }
});
export default SearchBar;