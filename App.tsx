import React, {useState,useEffect,useCallback} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';
import { Routes } from './src/routes/routes';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font' ;
import { StyleSheet } from 'react-native';

import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

export default function App() {
  const[appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    (async () => {
      try{
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          OpenSans_300Light,
          OpenSans_400Regular,
          OpenSans_500Medium,
          OpenSans_600SemiBold,
          OpenSans_700Bold,
          OpenSans_800ExtraBold,
          OpenSans_300Light_Italic,
          OpenSans_400Regular_Italic,
          OpenSans_500Medium_Italic,
          OpenSans_600SemiBold_Italic,
          OpenSans_700Bold_Italic,
          OpenSans_800ExtraBold_Italic,
        });
      }
      catch{
        //handle error
      }
      finally{
        setAppIsReady(true);
      }
    })();
  },[])

    const onLayout = useCallback(() => {
      if (appIsReady){
        SplashScreen.hideAsync();
      }
    }, [appIsReady]);

    if (!appIsReady){
      return null;
    }

  return (
    <View onLayout={onLayout} style={styles.container} >
      <NavigationContainer>
        <AuthProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </NavigationContainer>
    </View>
   );

  //http://www.neki-it.com.br/brand/

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})  