import {StyleSheet,Dimensions} from 'react-native';
const win = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#DA598F',
        paddingHorizontal: 10
      },
    
      btnscontainer: {
        marginTop : 15 , 
        justifyContent: "center",
        backgroundColor: '#DA598F',
        paddingHorizontal: 10,
      },
     
      Title : {
           fontSize: 50,
           color : "white"
      },
    
      HyperlinkStyle : {
        textAlign: 'center',
        marginTop : 15 ,
        color : "#BC9EB1" ,
      },
  
      UHyperlinkStyle : {
        color : "#BC9EB1" ,
        textDecorationLine: "underline" ,
      },
    
      button: {
        alignItems: "center",
        backgroundColor: "transparent",
        marginTop : 8 ,
        padding: 13,
        borderWidth: 1.5,
        borderColor: '#BC9EB1' ,
        borderRadius: 30,
        display: "flex" ,
        flexWrap: "wrap" ,
        flexDirection: "row" ,
    
      },
    
      Text2 : {
        marginTop : 20 ,
        width : 300 ,
        color : "#BC9EB1" ,
        textAlign: 'center',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Rubik-Bold' ,
        fontWeight: "bold" ,
      },
    
      countContainer: {
        alignItems: "center",
        padding: 10,
        marginTop: 160 
      },
    
      icon: {
        width: "15%",
        height: 25,
        color : "#BC9EB1" ,
      },
    
      btnText: {
        textAlign: 'center',
        fontSize: 14,
        color : "#BC9EB1" ,
        width:'100%',
        fontFamily: 'Rubik-Bold' ,
        fontWeight: "bold",
        letterSpacing: 1 ,
        width: "80%" , 
      }
  });