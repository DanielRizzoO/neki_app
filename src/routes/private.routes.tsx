
import React from 'react';

import { Home } from '../screens/Home/Home';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import { ThemeContext } from "../context/ThemeContext";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function MyTabs() {
  const { theme } = React.useContext(ThemeContext);
  
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme === 'light' ? '#2d949d' : '#284d6d',
        tabBarInactiveBackgroundColor:  theme === 'light' ? '#fff' : '#111111',
        tabBarActiveBackgroundColor:  theme === 'light' ? '#fff' : '#111111',
        tabBarInactiveTintColor: theme === 'light' ? '#1e1e1e' : '#cfcfcf',  
        
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: '#fff',
          height: 55,
          alignItems:'center',
        }
      }}    
      
      initialRouteName={'Home'}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel:'Início',
         tabBarIcon: ({ color, size }) => (
          <Entypo name="home" color={color} size={26} />
        )
       }} 
      />
      
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Main'}>

      {/* Dentro do app */}
      <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
