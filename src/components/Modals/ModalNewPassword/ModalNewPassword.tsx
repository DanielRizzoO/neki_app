import {
  Modal,
  View,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Text,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { styles } from "./styles"

import { AuthContext } from "../../../context/AuthContext";
import usuarioService from "../../../api/services/UsuarioService";
import { SecureModalPasswordInputInput } from "../../Input/ModalPasswordInput/ModalPasswordInput";

export const ModalNewPassword = ({
  isSelectedModalNewPassword,
  setIsSelectedModalNewPassword,
  title
}) => {

  const { theme } = React.useContext(ThemeContext);
  const { user } = React.useContext(AuthContext)

  const [senha, setSenha] = useState<string>("");
  const [countCheck, setCountCheck] = useState(0);

  React.useEffect(() => {
    validationPassword(senha)
  }, [senha])

  const onChangeSenha = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setSenha(value);
  };

  const usuario = {
    id: user.id,
    email: user.email,
    senha: senha,
    nome: user.nome,
    saldo: user.saldo,
    perfil: user.perfil
  }

  const updatePassword = async () => {
      if(countCheck === 4 && senha != ""){
        const response = await usuarioService.update(usuario);
        console.log(response.status)
        if(response.status == 200){
          setIsSelectedModalNewPassword(false);
          setCountCheck(0)
          setSenha("")
        }
      }else{
        Alert.alert("Atenção", "Por favor, preencha os requisitos necessários para continuar...");
      }
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

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSelectedModalNewPassword}
      onRequestClose={() => {
        setIsSelectedModalNewPassword(false);
      }}
    >
      <TouchableWithoutFeedback onPress={() => setIsSelectedModalNewPassword(false)}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      {/* Content */}
      <View
        style={{
          ...styles.modalContentView,
          backgroundColor: theme === "light" ? "#fff" : "#111111",
        }}
      >
        <SecureModalPasswordInputInput title={title} onChange={onChangeSenha} />
      <View style={styles.barBox}>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 1 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 2 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 3 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
        <View style={{height: 5, width:'24.5%', backgroundColor: countCheck < 4 ? theme === 'light' ? '#D9D9D9' : '#6e6e6e' : theme === 'light' ? '#2d949d' : '#284d6d' }}/>
      </View>
      <Text style={{fontFamily:'OpenSans_400Regular',fontSize:14, marginBottom: 60, color: theme === 'light' ? '#838383' : '#474747'}}>Use ao menos 8 caracteres, com a combinação de letras maíusculas e minúsculas, números e símbolos.</Text>
        <View style={{ height: 0, width: 1 }} />

      </View>
    </Modal>
  );
};
