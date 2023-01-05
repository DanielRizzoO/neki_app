import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        width: 158,
        height: 76,
        alignItems:"center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2.60,

        elevation: 4,
    },
    firstLine:{
        flexDirection: "row",
        justifyContent:"space-between",
        width: '100%',
        marginBottom: 8
    },
    title: {
        color: '#fff',
        fontFamily:'OpenSans_600SemiBold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        fontFamily:'OpenSans_600SemiBold',
        color: '#fff',
        alignSelf:"flex-start"
    }
})
