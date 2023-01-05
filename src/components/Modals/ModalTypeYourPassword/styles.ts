import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
  modalContentView: {
    borderRadius: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    
   
    borderColor:'#fff',
    paddingHorizontal:40,
    paddingVertical:30,

    width: '100%',
    height: 300,
   

    marginTop:'auto',

    alignSelf:"center",
    alignItems:"center",

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

},

modalOverlay: {
    position:'absolute',
    backgroundColor: 'rgba(0,0,0,0.85)',
    top:0,
    bottom:0,
    left:0, fontSize: 16,
    fontFamily:'OpenSans_600SemiBold',
    right:0
},
recorrente: {
  fontSize: 16,
  marginBottom:4,
  fontFamily:'OpenSans_600SemiBold',
  marginRight: 8
},
text:{
  fontFamily:'OpenSans_400Regular',fontSize:14, width: '100%', marginBottom: 90, marginTop: 10,
}
  });