import React, { useState } from "react";
import { View, Picker, Text , StyleSheet, TouchableOpacity , Linking  , TextInput,CheckBox } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { CheckBox } from 'react-native-elements'

export default function Test() {

    const [email, onChangeemail] = React.useState(null);
    const [isSelected, setSelection] = useState(false);
    

    return (
        <View style={styles.container}>
            <Icon name="angle-left" size={50} style={styles.iconBack} />
          <View style={styles.containerEmail}>
            <Text style={styles.Text1}>Mon adresse mail :</Text>
            <View style={styles.emailViewInput}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeemail}
                    value={email}
                    placeholder="Enter your email..."
                    keyboardType="email-address"
                />
            </View>

            <View style={{display:'flex' , flexWrap : 'wrap' , flexDirection: 'row',marginTop: 30 ,}}>
                <CheckBox
                    // checked={checked}
                    onValueChange={setSelection}
                    value={isSelected}
                    style={{width: "15%" ,}}
                    title=""
                />
                
                <Text style={{fontSize: 11 , width: "75%" ,textAlignVertical: "center" ,color: '#9c9c9c',fontFamily: 'Rubik-Bold' ,}}>
                    Je veux recevoir les nouveautés, mises à
                    jour et les offres de la part de Night Spy
                </Text>
            </View>
            
            <TouchableOpacity style={styles.button} >
                <Text style={{color : "white" , fontSize: 20 ,}}>Continuer</Text>
            </TouchableOpacity>

          </View>
        </View>
    )
}


const styles = StyleSheet.create({
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
