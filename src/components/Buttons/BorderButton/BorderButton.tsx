import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ThemeContext } from "../../../context/ThemeContext";


import { buttonProps } from './Props'

export const BorderButton = ({title, ...rest} : buttonProps) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.containerButton, backgroundColor: theme === 'light' ? '#8fbc8f' : '#8fbc8f'}}
      {...rest}
    >
      <Text style={{...styles.title, color: theme === 'light' ? '#fff' : '#cfcfcf'}}>{title}</Text>
    </TouchableOpacity>
  );
}