import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    secureView: {
        width: '100%',
        height: 48,
        justifyContent: "center",
        flexDirection: 'row',
    },
    eyeIcon:{
        alignSelf:'center',
        position: 'absolute',
        right: 18,
    },
    textInput: {
        borderRadius: 6,
        borderWidth: 1.5,
        
        paddingLeft: 10,
        paddingRight: 50,
       
        minWidth: '100%',
        height: 48,
        alignContent:"flex-start",
        marginBottom: 30
    },

    text: {
        fontSize: 16,
        marginBottom:4,
        fontFamily:'OpenSans_600SemiBold',
    }
})