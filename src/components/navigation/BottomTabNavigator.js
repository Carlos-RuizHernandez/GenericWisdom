import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../screens/Home/Home';
import Search from '../../screens/Search/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bookmarks from '../../screens/Bookmarks/Bookmarks';
import Compare from '../../screens/CompareScreen';
import History from '../../screens/History/History';
import Settings from '../../screens/Settings/Settings';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#353535'},
        headerTitleStyle: {color: '#f1f1f1'},
        headerStyle: {backgroundColor: '#353535'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Compare"
        component={Compare}
        options={{
          title: 'Compare',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="equal" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
