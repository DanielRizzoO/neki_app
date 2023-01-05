import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"


import { Feather } from '@expo/vector-icons'; 

import { styles } from "./styles"
import { InputProps } from "./Props";
import { ThemeContext } from "../../context/ThemeContext";

export const SecureInput = ({title, ...rest} : InputProps) => {
    const { theme } = React.useContext(ThemeContext);

    const [secure, setSecure] = useState<boolean>(true);
    const [eye, setEye] = useState<string>("eye");
    const handleSecure = () => {
        if(secure === true){
            setEye('eye-off')
            setSecure(false)
            
        } else{ 
            setEye('eye')
            setSecure(true)
        }
    }

    

    return(
        <View>
            <Text style={{...styles.text, color: theme === 'light' ? '#000' : '#cfcfcf'}}>
                {title}
            </Text>
            <View style={styles.secureView}>
                <TextInput
                    {...rest}
                    style={{...styles.textInput, backgroundColor: theme === 'light' ? '#fff' : '#1e1e1e', color:theme === 'light' ? '#000' : '#cfcfcf'}}                                       
                    selectionColor={'#37aeae'}
                    secureTextEntry={secure}
                    autoCapitalize="none"
                >
                </TextInput>
                <TouchableOpacity
                 activeOpacity={0.2}
                 style={styles.eyeIcon}
                 onPress={() => handleSecure()}
                >
                    <Feather
                        name={eye}
                        size={22}
                        color={'#838383'}
                    /> 
                </TouchableOpacity>
            </View>
        </View>
    )
}