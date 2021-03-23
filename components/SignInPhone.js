import React, { useState } from "react";
import { View, Picker, Text , StyleSheet, TouchableOpacity, Linking  , TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import A from 'react-native-a'

const App = () => {
    
    const [selectedValue, setSelectedValue] = useState("java");
    const [number, onChangeNumber] = React.useState(null);
    const url="https://google.com"


      return (
          
        <View style={styles.container}>
            <TouchableOpacity  >
                <Icon name="angle-left" size={50} style={styles.iconBack} />
            </TouchableOpacity>
          <View style={styles.containerPhone}>
            <Text style={styles.Title}>Mon numéro :</Text>
            <View style={styles.phoneContainer}>
                
                <Picker
                    selectedValue={selectedValue}
                    style={styles.pickerS}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="FR +33" value="FR" />
                    <Picker.Item label="MA +212" value="MA" />
                </Picker>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Type your phone number..."
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.DescriptionText}>
                    We will send a text with a verification code. Message
                    and data rates may apply <A href="google.com" style={styles.TextUnderLined}>. Learn what happens when
                    your number changes.</A>
            </Text>        
            
            <TouchableOpacity style={styles.button} >
                <Text style={{color : "white" , fontSize: 25 ,}}>Continuer</Text>
            </TouchableOpacity>

          </View>
        </View>
      );
    }
  
  const styles = StyleSheet.create({
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
        fontSize: 20 ,
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
  
  export default App;
  
