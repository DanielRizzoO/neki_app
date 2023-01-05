import React from "react"
import { View, Text, TextInput } from "react-native"
import { InputProps } from "./Props"
import { ThemeContext } from "../../context/ThemeContext"

import { styles } from "./styles"

export const CommonInput = ({title, ...rest} : InputProps) => {
    const { theme } = React.useContext(ThemeContext);

    return(
        <View>
            <Text style={{...styles.text, color: theme === 'light' ? '#000' : '#cfcfcf'}}>
                {title}
            </Text>
            <TextInput
                style={{...styles.textInput, backgroundColor:theme === 'light' ? '#fff' : '#1e1e1e', color:theme === 'light' ? '#000' : '#cfcfcf'}}
                autoCorrect={false}
                autoCapitalize="none"
                selectionColor={'rgb(45, 141, 160)'}
                {...rest}        
            >
            </TextInput>
        </View>
    )
}