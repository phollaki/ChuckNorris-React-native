import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import ChuckNorris from './src/ChuckNorris'
import Header from './shared/Header'

const App = () => {
  return (
    <SafeAreaView>
      <Header/>
      <ChuckNorris/>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  
});


export default App

