
import React from 'react';

import {Registro} from '../screens/Registro/Registro'
import { Login } from '../screens/Login/Login';


import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home/Home';


const Stack = createStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Welcome'}>

      {/* Entrando no app */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Home" component={Home} />
      

    </Stack.Navigator>
  );
}
