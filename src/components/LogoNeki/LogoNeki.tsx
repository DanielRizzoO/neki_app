import { Text, View, Image } from "react-native";
import React from "react";

import LogoN from '../../assets/logoNeki.png'
import Logo from '../../assets/logo.png'
import LogoMono from '../../assets/logo-mono.png'

import { ThemeContext } from "../../context/ThemeContext";
import { styles } from "./styles";

export const LogoNeki =()  => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={{flexDirection:"row", alignItems:"center"}}>
      <Image source={theme == 'light' ? Logo : LogoMono} style={{height: 55, width: 52}}/>
      <Text style={{...styles.title, color: theme === 'light' ? '#000' : '#cfcfcf'}}></Text>
    </View>
  );
}