import 'react-native-gesture-handler';
import React, { createContext, useState, useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainHome from './screens/MainHome';
import MainLogin from './screens/MainLogin';
import { AuthContext } from './context';

const Drawer = createDrawerNavigator();

export default function App() {
  const [token, setToken] = useState('');

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      <NavigationContainer>
        {token === '' ? (
          <MainLogin />
        
        ) : (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Narayan Study" component={MainHome} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
