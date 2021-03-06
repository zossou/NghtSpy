import {StyleSheet,Dimensions} from 'react-native';
const win = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center" ,
      },
  
      containerName: {
          flex: 1,
          margin: 'auto',
          marginLeft: "auto",
          marginRight : "auto",
          width: "80%",
          marginTop: 70 ,
        },
    
  
      NameViewInput : {
          display : 'flex' ,
          flexWrap : 'wrap' ,
          flexDirection: 'row' ,
          margin : 'auto',
      },
  
      Text1 : {
          fontSize: 25 ,
      },
  
      Text2 : {
          fontSize: 13 ,
          color: '#9c9c9c',
          marginTop: 40 ,
      },
  
      input : {
          borderBottomWidth : 1 ,
          width: "80%" ,
          borderBottomColor: "#9c9c9c" ,
          marginLeft: "auto" ,
          marginRight: "auto" ,
          marginTop: 25 ,
      },
      button : {
          backgroundColor: '#DA598F' ,
          padding : 10,
          marginTop: 80 ,
          borderRadius: 7 ,
          alignItems: 'center' ,
          marginBottom: 40 ,
      },
  
      iconBack : {
          marginLeft: 20 ,
          marginTop: 10 ,
          color: '#DA598F' ,
      },
  
      datePickerStyle: {
          width: "80%",
          marginTop: 20,
          marginLeft: "auto" ,
          marginRight: "auto" ,
          marginTop: 80 ,
      },
  });