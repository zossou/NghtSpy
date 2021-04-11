import React, { useState } from "react";
import { View, Picker, Text , StyleSheet, TouchableOpacity , Linking  , TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function TypingName( {navigation} ) {

    const [email, onChangeemail] = React.useState(null);
    const navigation_ = useNavigation();
    

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => { navigation_.goBack(); }} >
                <Icon name="angle-left" size={50} style={styles.iconBack} />
          </TouchableOpacity>
          <View style={styles.containerName}>
            <Text style={styles.Text1}>Mon prénom :</Text>
            <View style={styles.NameViewInput}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeemail}
                    value={email}
                    placeholder="Entrer votre prénom..."
                    keyboardType="ascii-capable"
                />
                <Text style={styles.DescriptionText}>
                  Les utilisateurs te verront
                  apparaître sous ce prénom
                </Text>
            </View>

            

            <TouchableOpacity style={styles.button} onPress = { () => navigation.navigate('BornDate') } >
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
        // fontWeight: "bold" , 
    },

    Text2 : {
        fontSize: 13 ,
        color: '#9c9c9c',
        marginTop: 40 ,
    },

    DescriptionText : {
        width: "80%",
        marginRight: "auto" ,
        marginLeft: "auto" ,
        color:"#9c9c9c",
        fontSize: 12 ,
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
    },

    iconBack : {
        marginLeft: 20 ,
        marginTop: 10 ,
        color: '#DA598F' ,
    },

  });
  

