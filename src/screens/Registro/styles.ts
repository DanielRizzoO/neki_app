import { StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        paddingTop: Platform.OS === "ios" ? 64 : 50,
        flex: 1,
        paddingHorizontal: 70,
        width:"100%",
    },
    barBox: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 16,
        marginTop:20
    },
    lastBox:{
        width: '100%',
        marginTop: 30,
        alignItems:'center'
    },
    botaoLogin:{
        marginTop:15,
        alignItems: "center",
    },
    signUp:{
        marginTop: 50,
        width: '120%',
        backgroundColor: '#8fbc8f',
        opacity: 0.6,
        padding: 30,
        borderRadius: 15,
        elevation: 10,
        shadowColor: 'black',
    },
    signUpTitle:{
        color:'#0B6E4F',
        fontWeight: '800',
        fontSize:20,
        marginBottom: 5,
        textAlign: 'center',
        letterSpacing: 2,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        paddingBottom: 20,
    },
    passRules:{
        fontFamily:'OpenSans_400Regular',
        fontSize:14, 
        marginBottom: 30, 
        color: '#838383',
    },
    startButton:{
        borderRadius: 5,
        width: '100%',
        backgroundColor:'#8fbc8f',
        alignItems:"center"
    },
    login:{
        marginBottom: 8,
        fontFamily:'OpenSans_400Regular', 
        color: '#838383'
    },
    hyperlinkStyle:{
        marginTop:26,
        alignSelf:'flex-start',
        color:'#073B3A',
    }
});