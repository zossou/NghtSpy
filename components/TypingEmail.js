import React, { useState } from "react";
import { View, Picker, Text , StyleSheet, TouchableOpacity , Linking  , TextInput,CheckBox } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './../src/apps_communs/properties_Styles/LoginWithPhoneStyle/typingEmailStyle';

export default function TypingEmail( {navigation} ) {

    const [email, onChangeemail] = React.useState(null);
    const [isSelected, setSelection] = useState(false);
    const navigation_ = useNavigation();
    

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => { navigation_.goBack(); }} >
                <Icon name="angle-left" size={50} style={styles.iconBack} />
          </TouchableOpacity>
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
            
            <TouchableOpacity style={styles.button} onPress = { () => navigation.navigate('TypingName') } >
                <Text style={{color : "white" , fontSize: 20 ,}}>Continuer</Text>
            </TouchableOpacity>

          </View>
        </View>
    )
}
