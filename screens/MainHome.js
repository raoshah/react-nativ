import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home'
import Chats from './Chats'
import Courses from './Quiz'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

const MainHome = ({navigation}) => {
    return (<Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      
      
      <Tab.Screen name="Home" component={Home}
        options={{
         
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }} />

      <Tab.Screen name="Courses" component={Courses}
        options={({route}) => ({tabBarStyle: {display: getRouteName(route)},
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={30} />
          ),
        })} />


      <Tab.Screen name="Chats" component={Chats}
        options={({route}) => ({ tabBarStyle: {display: getRouteName(route)},
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chat" color={color} size={30} />
        ),
        })} />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }} />



    </Tab.Navigator>
    );
};

const getRouteName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route)
  console.log(routeName)
  if (routeName?.includes("Home") || routeName?.includes("Quiz") || routeName?.includes("Result") || routeName?.includes("Chating") ) {
    return "none"
  }
  return "flex"
};

export default MainHome;
