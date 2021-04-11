import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/Home_page';
import SignInPhone from './components/SignInPhone';
import TypingEmail from './components/TypingEmail';
import TypingName from './components/TypingName';
import BornDate from './components/TypingBornDate';


const stack = createStackNavigator();

const MyStack = () => {
  return(

    <NavigationContainer>

        <stack.Navigator>

            <stack.Screen 
              name="Home"
              component={HomePage} 
              options={{ headerShown : false }}
            />

            <stack.Screen 
              name="SignInPhone" 
              component={SignInPhone}  
              options={{ headerShown : false }}
            />

            <stack.Screen 
              name="TypingEmail" 
              component={TypingEmail}  
              options={{ headerShown : false }}
            />

            <stack.Screen 
              name="TypingName" 
              component={TypingName}  
              options={{ headerShown : false }}
            />

            <stack.Screen 
              name="BornDate" 
              component={BornDate}  
              options={{ headerShown : false }}
            />

        </stack.Navigator>

    </NavigationContainer>
  );
}

export default MyStack
