import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInput: {
        borderRadius: 16,
        borderWidth: 1.25,

        paddingLeft: 10,
        paddingRight: 50,

       
        minWidth: '100%',
        height: 48,
        alignContent:"flex-start",
    },

    text: {
        fontSize: 14,
        fontFamily:'OpenSans_400Regular',
        textAlignVertical:"center",
        marginBottom: 8,
    },
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
    }
})