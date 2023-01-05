import React from "react"
import { View, Text, TextInput } from "react-native"
import { InputProps } from "./Props"
import { ThemeContext } from "../../../context/ThemeContext"


import { styles } from "./styles"

export const ModalInput = ({title, ...rest} : InputProps) => {
    const { theme } = React.useContext(ThemeContext);

    return(
        <View>
            <Text style={{...styles.text, color:theme === 'light' ? '#000' : '#cfcfcf'}}>
                {title}
            </Text>
            <TextInput
                style={{...styles.textInput, borderColor: theme === 'light' ? '#000' : '#2e2e2e', color:  theme === 'light' ? '#000' : '#cfcfcf'}}
                autoCorrect={false}
                placeholderTextColor={ theme === 'light' ? '#838383' : '#474747'}
                selectionColor={'rgb(45, 141, 160)'}
                {...rest}        
            >
            </TextInput>
        </View>
    )
}