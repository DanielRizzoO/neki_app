import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Alert } from 'react-native'
import usuarioService from "../api/services/UsuarioService";
import { api } from "../api/api";
import jwtDecode from "jwt-decode";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(false);
  const [token, setToken] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const [receitaTotal, setReceitaTotal] = React.useState(0);
  const [despesaTotal, setDespesaTotal] = React.useState(0);
  const [listaMovimentacoes, setListaMovimentacoes] = React.useState()

  const [recoverEmail, setRecoverEmail] = React.useState("")

  const [id, setId] = React.useState(null);
  const [user, setUser] = React.useState({ id: "",
                                          nome: "",
                                          email: "",
                                          senha: "",
                                          saldo : -900000000000,
                                          perfil :"",
                                        });
  
  const loadToken = async () => {
    const jsonValue = await AsyncStorage.getItem("@Token");
    if (jsonValue != null) {
      setToken(jsonValue);
    }
    if (jsonValue == null) {
      setToken(null);
    }
  };

  const loadID = async () => {
    const jsonValue = await AsyncStorage.getItem("@ID");
    if (jsonValue != null) {
      return setId(jsonValue);
    }
  };

  useEffect(() => {
    if (token != null) {
      return setAuth(true);
    } else {
      return setAuth(false);
    }
  });

  useEffect(() => {
    loadID()
    loadToken();
    api.defaults.headers.common["Authorization"] = token;
  });
  
  useEffect(() => {
    getUser()
    setInterval(()  => {
      userSAVE()
    }, 1000)
  }, [])
  

  const getUser = async () => {
    if(id != null){
      const responseUSER = await usuarioService.get(id);
      setUser(responseUSER.data)
      await AsyncStorage.setItem("@USER", JSON.stringify(responseUSER.data))
    }
  }

  const userSAVE = async () => {
    const jsonValue = await AsyncStorage.getItem("@USER");
    if(jsonValue != null){
      setUser(JSON.parse(jsonValue))
    }
  }

  // const getReceita = async () => {
  //   if(id != null){
  //     const responseRECEITA = await movimentacaoService.getReceitaTOTAL();
  //     if(responseRECEITA.data == undefined || responseRECEITA.data == NaN || responseRECEITA.data == ""){
  //       console.log(responseRECEITA.data)
  //       await AsyncStorage.setItem("@RECEITA", JSON.stringify(0))
  //       setReceitaTotal(0)
  //     }else{
  //       setReceitaTotal(parseFloat(responseRECEITA.data))
  //       await AsyncStorage.setItem("@RECEITA", JSON.stringify(responseRECEITA.data))
  //     }
  //   }
  // }

  const receitaSAVE = async () => {
    const jsonValue = await AsyncStorage.getItem("@RECEITA");
    if(jsonValue != null){
    }else{
      setReceitaTotal(parseFloat((jsonValue)))
    }
  }

  const getDespesa= async () => {
    if(id != null){
      const responseDESPESA = await movimentacaoService.getDespesaTOTAL();
     
      if(responseDESPESA.data == undefined || responseDESPESA.data == NaN || responseDESPESA.data == ""){
        setReceitaTotal(0)
        await AsyncStorage.setItem("@DESPESA", '0')
      }else{
        setDespesaTotal( parseFloat(responseDESPESA.data))
        await AsyncStorage.setItem("@DESPESA", JSON.stringify(responseDESPESA.data))
      }
    }
  }

  const despesaSAVE = async () => {
    const jsonValue = await AsyncStorage.getItem("@DESPESA");
    if(jsonValue != null){
      setDespesaTotal(parseFloat((jsonValue)))
    }
  }

  const getDataLIST = async () => {
    if(id != null){
      const responseDataLIST = await movimentacaoService.getMovimentacaoPorUsuario();
      try{
        setListaMovimentacoes((responseDataLIST.data))
      }catch(err){
        console.log(responseDataLIST.data)
        console.log(err)
      }
    }
  }

  //Métodos de login, criar conta e sair da conta.
  const signUp = (user, userLogin) => {
    setLoading(true);
    usuarioService
      .create(user)
      .then((res) =>
        res.status == 201
          ? signIn(userLogin)
          : console.log("A criação de conta falhou")
      )
      .catch((err) => {
        console.log(err), Alert.alert("Algo deu errado...", "Esse email já está sendo usado"), setLoading(false);
      })
      .finally(() => console.log("Terminou"));
  };

  const signIn = async (usuario) => {
    try {
      setLoading(true);
      const response = await usuarioService.login(usuario);
      const tokenCoded = response.headers.authorization;

      var decoded = jwtDecode(tokenCoded)
    
      await AsyncStorage.setItem("@Token", tokenCoded);
      await AsyncStorage.setItem("@ID", JSON.stringify(decoded.id))
      console.log("teste")
      api.defaults.headers.common["Authorization"] = token;
      console.log(JSON.stringify(decoded.id))
      return setLoading(false);
    } catch (error) {
      Alert.alert("Falha ao acessar conta", "Email ou senha inválido");
      setLoading(false)
      console.log(error);
    }
  };

  const signOut = async () => {
    setListaMovimentacoes({})
    setId(null)
    setUser({ id: "",
    nome: "",
    email: "",
    senha: "",
    saldo : 0,
    perfil :"",
  })
  setToken(null);
  setDespesaTotal(0)
  setReceitaTotal(0)
  setRecoverEmail("")
  await AsyncStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        signOut,
        signIn,
        signUp,
        token,
        loading,
        user,
        getUser,
        userSAVE,
        id,      
        receitaTotal,
        despesaTotal,
        receitaSAVE,
        despesaSAVE,
        getDespesa,
        getDataLIST,
        listaMovimentacoes,
        setListaMovimentacoes,
        recoverEmail,
        setRecoverEmail,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
