import React, { useState } from "react";
import { View, Picker, Text , StyleSheet, TouchableOpacity , Linking  , TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import { useNavigation } from '@react-navigation/native'; 

const TypingBornDate = () => {
    
    const [date, setDate] = useState('09-10-2020');
    const navigation_ = useNavigation();

      return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => { navigation_.goBack(); }} >
                <Icon name="angle-left" size={50} style={styles.iconBack} />
          </TouchableOpacity>
      <View style={styles.containerName}>
        <Text style={styles.Text1}>Ma date de naissance :</Text>
        <View style={styles.NameViewInput}>
        <DatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
                },
                dateInput: {
                marginLeft: 36,
                },
            }}
            onDateChange={(date) => {
                setDate(date);
            }}
        />
        <Text style={{width: "73%",marginRight: "auto" ,marginLeft: "auto" ,color:"#9c9c9c", fontSize: 15,marginTop: 5 , }}>
        Les utilisateurs verront ton age
        </Text>
        </View>

        <TouchableOpacity style={styles.button} >
            <Text style={{color : "white" , fontSize: 20 ,}}>Continuer</Text>
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

    input : {
        borderBottomWidth : 1 ,
        width: "80%" ,
        borderBottomColor: "#9c9c9c" ,
        marginLeft: "auto" ,
        marginRight: "auto" ,
        marginTop: 25 ,
    },

    // button : {
    //     position: "absolute",
    //     bottom: 0,
    //     backgroundColor: "#B375D8" ,
    //     padding : 10,
    //     marginBottom: 40 ,
    //     width: "100%" ,
    //     borderRadius: 7 ,
    //     alignItems: 'center' ,
        
    // },

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
  
  export default TypingBornDate;
  
