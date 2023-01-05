import React, { useState, useEffect, useContext } from 'react';
import { Text, SafeAreaView, View, NativeSyntheticEvent, TextInputChangeEventData, Alert } from 'react-native';
import { styles } from './styles';
import {CommonInput} from '../../components/Input/CommonInput' 
import {SecureInput} from '../../components/Input/SecureInput'
import {BorderButton} from '../../components/Buttons/BorderButton/BorderButton'
import Container, { Toast } from 'toastify-react-native';
import { LogoNeki } from '../../components/LogoNeki/LogoNeki'
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';
import { Usuario, UsuarioLogin, UsuarioRegister } from '../../api/models/Usuario';
import { create } from '../../api/services/UsuarioService';

export  const Registro = ({navigation}) => {
  const { theme } = React.useContext(ThemeContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordValid, setUserPasswordValid] = useState("");

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [countCheck, setCountCheck] = useState(0);
  const { signUp } = useContext(AuthContext)
  
  useEffect(() => {
    validationPassword(userPassword)
    emailValidation(userEmail)
  });

  const onChangeUserPassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserPassword(value);
  }
  const onChangeUserPasswordValid = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserPasswordValid(value);
  }
  const onChangeUserEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserEmail(value);
  }
  
  const validationPassword = (password) => {
    
    let count : number
    count = 0;
    
    let check1 = /(?=.*[a-z])/;
    let check2 = /(?=.*[A-Z])/;
    let check3 = /(?=.*[0-9])/;
    let check4 = /(?=.{8,})/;
    
    if (password.match(check1)) {
      count ++
      setCountCheck(count)
    }
    if (password.match(check2)) {
      count ++
      setCountCheck(count)
    }
    if (password.match(check3)) {
      count ++
      setCountCheck(count)
    }
    if (password.match(check4)) {
      count ++
      setCountCheck(count)
    }
    if (password === ''){
      setCountCheck(0)
    }
  }
  
  const emailValidation = (email) => {
    
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailValid(false)
      return false;
    }
    else {
      setEmailValid(true)
    }    
  }

    const userValidation = () => {
      if(countCheck === 4 && userPassword != ''){
        if (userPassword == userPasswordValid){
          try{
            createAccount()
          } catch {
            (err => console.log(err))
          }
        } else {
          Toast.error('Senhas não são iguais');
        }
      } else{
        console.log("Ainda falta preencher " + (4 - countCheck) + " requisito(s).")
        Toast.error('Escolha uma senha forte');
      }
  };
 
  const createAccount = () => {
    const usuario : Usuario = {
      login: userEmail,
      password: userPassword
    }
    try {
      create(usuario)
      Alert.alert("Cadastro realizado");
    } catch {
      Alert.alert("Algo deu errado");
      (err => console.log(err))
    }
    const usuarioLogin : UsuarioLogin = {
      login: userEmail,
      password: userPassword,
    }
    goLogin()
  }

  const goLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: theme === 'light' ? '#fff' : '#111111'}}>
      <Container 
        positionValue={110}
        duration={1400}
        position="top"
        width= {340}
      />
      <LogoNeki/>
      <View style={styles.signUp}>
          <Text style={styles.signUpTitle}>CADASTRO</Text>
          <CommonInput 
            title=''
            placeholder='Endereço de Email'
            onChange={onChangeUserEmail}
          />
          <SecureInput
            title=''
            placeholder='Senha'
            onChange={onChangeUserPassword}
          />
          <SecureInput
            title=''
            placeholder='Confirme sua senha'
            onChange={onChangeUserPasswordValid}
          />
        </View>
      <View style={styles.barBox}>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 1 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 2 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 3 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 4 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
      </View>
      <Text style={styles.passRules}>Use ao menos 8 caracteres, com a combinação de letras maíusculas e minúsculas, números e símbolos.</Text>
    
      <BorderButton title={"Salvar"} onPress={() => userValidation()}/>
      <View style={styles.lastBox}>
        <Text 
          style={styles.login}> Já possui uma conta?{' '}
          <Text
            onPress={() => goLogin()} 
            style={styles.hyperlinkStyle}>
            Faça o login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
    

  
