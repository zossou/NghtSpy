import {StyleSheet,Dimensions} from 'react-native';
const win = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center" ,
      },
  
      containerPhone: {
          flex: 1,
          margin: 'auto',
          marginLeft: "auto",
          marginRight : "auto",
          width: "80%",
          marginTop: 70 ,
        },
     
  
      phoneContainer : {
          display : 'flex' ,
          flexWrap : 'wrap' ,
          flexDirection: 'row' ,
          marginTop: 20 ,
  
      },
  
      Title : {
          fontSize: 25 ,
      },
  
      DescriptionText : {
          fontSize: 13 ,
          color: '#9c9c9c',
          marginTop: 40 ,
          fontFamily: 'Rubik-Bold' ,
          // letterSpacing: 0.5 ,
      },
  
      TextUnderLined : {
          fontSize: 13 ,
          color: '#434142',
          textDecorationLine: "underline" ,
      },
    
      pickerS : {
          height: "100%",
          width: "40%",
          borderBottomWidth : 1 ,
          borderColor : 'red' ,
      },
  
      input : {
          borderBottomWidth : 1 ,
          borderBottomColor: "#B1B1B1" ,
          width: "60%" ,
      },
  
      button : {
          backgroundColor: '#DA598F' ,
          padding : 10,
          marginTop: 80 ,
          borderRadius: 7 ,
          alignItems: 'center' ,
      },
  
      iconBack : {
          marginLeft: 20 ,
          marginTop: 10 ,
          color: '#DA598F' ,
      },
  
      btnText : {
          fontSize: 25 ,  
      }  
  });