import {StyleSheet,Dimensions} from 'react-native';
const win = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center" ,
      },
  
      containerEmail: {
          flex: 1,
          margin: 'auto',
          marginLeft: "auto",
          marginRight : "auto",
          width: "80%",
          marginTop: 70 ,
        },
    
  
        emailViewInput : {
          display : 'flex' ,
          flexWrap : 'wrap' ,
          flexDirection: 'row' ,
          margin : 'auto',
          marginTop: 10 ,
      },
  
      Text1 : {
          fontSize: 25 ,
          // fontWeight: "bold" , 
      },
  
      Text2 : {
          fontSize: 13 ,
          color: '#9c9c9c',
          marginTop: 40 ,
      },
  
      input : {
          borderBottomWidth : 1 ,
          width: "100%" ,
          borderBottomColor: "#9c9c9c" ,
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
  
      CheckBox : {
          fontSize: 8 ,
      }
  });