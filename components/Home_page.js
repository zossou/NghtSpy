import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View  } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import A from 'react-native-a'


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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#DA598F',
      paddingHorizontal: 10
    },
  
    btnscontainer: {
      marginTop : 15 , 
      justifyContent: "center",
      backgroundColor: '#DA598F',
      paddingHorizontal: 10,
    },
   
    Title : {
         fontSize: 50,
         color : "white"
    },
  
    HyperlinkStyle : {
      textAlign: 'center',
      marginTop : 15 ,
      color : "#BC9EB1" ,
    },

    //U = underlined
    UHyperlinkStyle : {
      color : "#BC9EB1" ,
      textDecorationLine: "underline" ,
    },
  
    button: {
      alignItems: "center",
      backgroundColor: "transparent",
      marginTop : 8 ,
      padding: 13,
      borderWidth: 1.5,
      borderColor: '#BC9EB1' ,
      borderRadius: 30,
      display: "flex" ,
      flexWrap: "wrap" ,
      flexDirection: "row" ,
  
    },
  
    Text2 : {
      marginTop : 20 ,
      width : 300 ,
      color : "#BC9EB1" ,
      textAlign: 'center',
      fontSize: 12,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Rubik-Bold' ,
      fontWeight: "bold" ,
    //   letterSpacing: 0.5 ,
    },
  
    countContainer: {
      alignItems: "center",
      padding: 10,
      marginTop: 160 
    },
  
    icon: {
      width: "15%",
      height: 25,
      // position: 'absolute',
      // left: 10,
      // top : 7,
      // position: "absolute",
      // top: "50%",
       color : "#BC9EB1" ,
    },
  
    btnText: {
      textAlign: 'center',
      fontSize: 14,
      color : "#BC9EB1" ,
      width:'100%',
      fontFamily: 'Rubik-Bold' ,
      fontWeight: "bold",
      letterSpacing: 1 ,
      width: "80%" , 
    }
  
  });

export default signin ;

