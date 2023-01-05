import {
  Modal,
  View,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Text,
  Alert
} from "react-native";
import React, { useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { styles } from "./styles";

import { AuthContext } from "../../../context/AuthContext";
import usuarioService from "../../../api/services/UsuarioService";
import { SecureModalPasswordInputInput } from "../../Input/ModalPasswordInput/ModalPasswordInput";
import { ModalNewPassword } from "../ModalNewPassword/ModalNewPassword";

export const ModalTypeYourPassword = ({
  isSelectedModal,
  setIsSelectedModal,
  title,
}) => {
  const { theme } = React.useContext(ThemeContext);
  const { user } = React.useContext(AuthContext);

  const [senha, setSenha] = useState<string>("");
  const [
    isSelectedModalNewPassword,
    setIsSelectedModalNewPassword,
  ] = React.useState(false);

  const onChangeSenha = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setSenha(value);
  };

  const usuario = {
    email: user.email,
    password: senha,
  };

  const testPassword = async () => {
    try{
      const response = await usuarioService.login(usuario);
      if (response.status == 200) {
        setIsSelectedModalNewPassword(true);
        setIsSelectedModal(false);
      }
      setSenha("")
    }catch(err){
      Alert.alert("Senha incorreta", "Por favor, tente novamente...");
    }
  };

  return (
    <>
      <ModalNewPassword
        isSelectedModalNewPassword={isSelectedModalNewPassword}
        setIsSelectedModalNewPassword={setIsSelectedModalNewPassword}
        title={"Digite sua nova senha"}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSelectedModal}
        onRequestClose={() => {
          setIsSelectedModal(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setIsSelectedModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        {/* Content */}
        <View
          style={{
            ...styles.modalContentView,
            backgroundColor: theme === "light" ? "#fff" : "#111111",
          }}
        >
          <SecureModalPasswordInputInput
            title={title}
            onChange={onChangeSenha}
          />
           <Text style={{...styles.text, color: theme === 'light' ? '#838383' : '#474747'}}>Para alterar sua senha, primeiro confirme sua identidade. Por favor, digite sua senha atual.</Text>
          <View style={{ height: 0, width: 1 }} />
        </View>
      </Modal>
    </>
  );
};
