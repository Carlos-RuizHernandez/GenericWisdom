import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/Home/Home';
import Search from '../../screens/Search/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bookmarks from '../../screens/Bookmarks/Bookmarks';
import Compare from '../../screens/CompareScreen';
import History from '../../screens/History/History';
import Settings from '../../screens/Settings/Settings';
import ResultsScreen from '../../screens/ResultsScreen';


const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#353535"
        },
        headerTitleStyle: {
          color: 'white'
        }
      }}>
      <HomeStack.Screen 
        name="Home" 
        component={Home}
        />
      <HomeStack.Screen 
        name="Results" 
        component={ResultsScreen}
        options={{
          headerTitle: `Results:`
        }}/>
    </HomeStack.Navigator>
  )
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#353535'},
        headerTitleStyle: {color: '#f1f1f1'},
        headerStyle: {backgroundColor: '#353535'},
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          headerShown: false,
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
            <MaterialCommunityIcons name="heart" color={color} size={size} />
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
