import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View  } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import A from 'react-native-a'
import styles from './../src/apps_communs/properties_Styles/HomeStyle/signinStyles';


const signin = ({navigation}) => {
    return (
            <View style={styles.container}>
                <View style={styles.countContainer}>
                <Text style={styles.Title}>
                Night Spy
                </Text>
                <Text style={styles.Text2} >
                    By tapping "Create account" or "Sign in" , you agree to 
                    our <A href="google.com" style={styles.UHyperlinkStyle}>Terms</A>.Learn how we process your data in our <A href="google.com" style={styles.UHyperlinkStyle}>Privacy Policy </A>
                    and <A href="google.com" style={styles.UHyperlinkStyle}>Cookies Policy</A>
                </Text>
                </View>
        
            <View style={styles.btnscontainer}>
                <TouchableOpacity style={styles.button} >
                    <Icon name="apple" size={24} style={styles.icon} />
                    <Text style={styles.btnText}>SIGN IN WITH APPLE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} >
                    <Icon name="facebook-official" size={24} style={styles.icon} />
                    <Text style={styles.btnText}>SIGN IN WITH FACEBOOK</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('SignInPhone')} >
                <Icon name="wechat" size={24} style={styles.icon} />
                    <Text style={styles.btnText}>SIGN IN WITH PHONE NUMBER</Text>
                </TouchableOpacity>

                {/* <Text style={styles.Text3} >Trouble signing in?</Text> */}
                <A href="google.com" style={styles.HyperlinkStyle}>Trouble signing in?</A>

            </View>
      </View>
    )
}
export default signin ;

