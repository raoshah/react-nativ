import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import DetailsScreen from './Courses';
import QuizScreen from './QuizScreen'
import ResultsScreen from './ResultsScreen'

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Course" component={DetailsScreen} />
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Quiz" component={QuizScreen}/>
      <HomeStack.Screen name="Result" component={ResultsScreen}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen