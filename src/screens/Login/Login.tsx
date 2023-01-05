
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData, SafeAreaView, AsyncStorage, Switch, Alert } from 'react-native';
import {CommonInput} from '../../components/Input/CommonInput' 
import {SecureInput} from '../../components/Input/SecureInput'
import {BorderButton} from '../../components/Buttons/BorderButton/BorderButton'
import { LogoNeki } from '../../components/LogoNeki/LogoNeki'
import { Toast } from 'toastify-react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';

import styles from './styles';
import { UsuarioLogin } from '../../api/models/Usuario';


export const Login  = ({navigation}) => {
  
  
  const { theme } = React.useContext(ThemeContext);
  const { signIn } = React.useContext(AuthContext);

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  //Obtendo as informações digitadas campos de email e senha
  const onChangeUserEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserEmail(value);
    // storeData(userEmail);
  }
  const onChangeUserPassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserPassword(value);
  }

  const loginNow = async () => {
    const usuario : UsuarioLogin = {
      login: userEmail,
      password: userPassword,
    }
    if(userEmail != ''){
      if(userPassword != ''){
        console.log("entrou")
        signIn(usuario)
      } else{
        Alert.alert("Digite uma senha");
        console.log("erro");
      }
    } else{
      Alert.alert("Digite um email");
    }
  }

  const goForgotPassword = () => {
    navigation.navigate('InserirEmail')
  }

  const goCreateAccount = () => {
    navigation.navigate('Registro')
  }

  const toggleRememberMe = value => {
    setRememberMe(value)
      if (value === true) {
      //user wants to be remembered.
        rememberUser();
      } else {
        forgetUser();
      }
  }

  const rememberUser = async () => {
    try {
      await AsyncStorage.setItem('YOUR-KEY', userEmail);
    } catch (error) {
      // Error saving data
    }
  };

  const getRememberedUser = async () => {
    try {
      const username = await AsyncStorage.getItem('YOUR-KEY');
      if (username !== null) {
        // We have username!!
        return username;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const forgetUser = async () => {
    try {
      await AsyncStorage.removeItem('Longtail-User');
    } catch (error) {
      // Error removing
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <LogoNeki/>
      </View>
      <View style={styles.login}>
        <Text style={styles.loginTitle}>LOGIN</Text>
        <View>
          <CommonInput
            placeholder= 'Login'
            onChange={onChangeUserEmail} title={''}/>
        </View>
        <View>
          <SecureInput 
            style={styles.loginBox}
            placeholder='Senha'
            onChange={onChangeUserPassword} title={''}/>
        </View>
        <TouchableOpacity 
          activeOpacity= {0.7}
          onPress={() => goForgotPassword()}>
          <Text style={styles.hyperlinkStyle}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
        <View style={styles.rememberMe}>
          <Text style={styles.rememberMeText}>Lembre-se de mim</Text>
          <Switch
            style={{justifyContent: 'flex-end',}}
            value={rememberMe}
            onValueChange={(value) => toggleRememberMe(value)}/>
        </View>
      </View>
      <View style={{marginVertical: 10}}/>
      <BorderButton 
        title={"Entrar"}
        onPress={() => loginNow()}
      />
      <View style={styles.cadastro}>
        <Text style={styles.linkStyle}>
          Não possui uma conta?{' '}
          <Text
            onPress={() => goCreateAccount()} 
            style={styles.hyperlinkStyle}>
            Cadastre-se
          </Text>
        </Text> 
      </View>
    </SafeAreaView>
  );
};

