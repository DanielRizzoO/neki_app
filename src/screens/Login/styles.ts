import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: Platform.OS == 'ios' ? 64 :50,
      width: '100%',
      paddingHorizontal: 70,
      alignItems:'center',
      backgroundColor: '#EEE',
  },
  hyperlinkStyle:{
      marginTop:26,
      alignSelf:'flex-start',
      color:'#073B3A',
  },
  linkStyle:{
      textAlign:"center",
      marginBottom: 15,
  },
  loginTitle:{
      color:'#0B6E4F',
      fontWeight: '800',
      fontSize:20,
      marginBottom: 20,
      textAlign: 'center',
      letterSpacing: 2,
      borderBottomColor: 'grey',
      borderBottomWidth: 2,
      paddingBottom: 20,
  },
  entrar:{
     marginVertical: 10,
     margintop:90,
  },
  cadastro:{
      width:'100%',
      marginTop: 35,
    
  },
  quadrado:{
    backgroundColor:'red'
    
  },
  login:{
    marginTop: 50,
    width: '120%',
    backgroundColor: '#8fbc8f',
    opacity: 0.6,
    padding: 30,
    borderRadius: 15,
    elevation: 10,
    shadowColor: 'black',
  },
  loginInput:{
    marginBottom: 16,
    color: '#073B3A',
  },
  loginBox:{
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  passBox:{
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  rememberMe:{
    flexDirection: 'row'
  },
  rememberMeText:{
    justifyContent: 'flex-start', 
    paddingTop: 13, 
    paddingRight: 10,
    color: '#073B3A',
},
logo:{
    paddingTop: 20
}

});

export default styles;