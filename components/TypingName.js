import React, { useState } from "react";
import { View, Picker, Text , StyleSheet, TouchableOpacity , Linking  , TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './../src/apps_communs/properties_Styles/LoginWithPhoneStyle/typingNameStyle';


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


