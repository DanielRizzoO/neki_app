import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: Platform.OS == 'ios' ? 64 : 50 ,
        width:'100%',
        alignItems: "center",
        maxHeight:'100%'
    },
    balance:{
        fontSize: 32,
        fontFamily:'OpenSans_400Regular',
    },
    total: {
        fontSize:20,
        fontFamily:'OpenSans_400Regular',
    }
})