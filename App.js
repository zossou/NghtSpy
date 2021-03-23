import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/Home_page';
import SignInPhone from './components/SignInPhone';
import TypingEmail from './components/TypingEmail';
import TypingName from './components/TypingName';

export default function App() {
  return (
    <TypingName />
  );
}

