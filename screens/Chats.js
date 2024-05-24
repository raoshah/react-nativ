import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from './MessagesScreen';
import ChatScreen from './ChatScreen';

const ChatStack = createStackNavigator();

const ChatStackScreen = ({navigation}) => {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen name="Message" component={MessagesScreen} />
      <ChatStack.Screen name="Chating" component={ChatScreen}/>
    </ChatStack.Navigator>
  );
};

export default ChatStackScreen