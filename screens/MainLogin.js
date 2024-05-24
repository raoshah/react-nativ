import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import Register from './Register';
import Login from './Login';


const Main = createStackNavigator();

const MainLogin = ({navigation}) => (
    <Main.Navigator headerMode='false' >
        <Main.Screen name="Welcome" component={Welcome}/>
        <Main.Screen name="Register" component={Register}/>
        <Main.Screen name="Login" component={Login}/>
    </Main.Navigator>
);

export default MainLogin;