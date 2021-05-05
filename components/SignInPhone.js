import React, { useState } from "react";
import { View, Picker, Text , StyleSheet, TouchableOpacity, Button  , TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import A from 'react-native-a';
import { useNavigation } from '@react-navigation/native';
import styles from './../src/apps_communs/properties_Styles/LoginWithPhoneStyle/signInPhoneStyles';

const SignInPhone = ( {navigation} ) => {
    
    const [selectedValue, setSelectedValue] = useState("java");
    const [number, onChangeNumber] = React.useState(null);
    const url="https://google.com";
    const navigation_ = useNavigation();


      return (
          
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation_.goBack(); }} >
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
            
            <TouchableOpacity style={styles.button} onPress = { () => navigation.navigate('TypingEmail') } >
                <Text style={{color : "white" , fontSize: 25 ,}}>Continuer</Text>
            </TouchableOpacity>

          </View>
        </View>
      );
    }
  
  export default SignInPhone;
  
