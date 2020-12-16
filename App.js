import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, StyleSheet, YellowBox} from 'react-native';
import Chucknorris from './src/Chucknorris';

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="auto" />
      <Chucknorris title="Chuck Norris Jokes"/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000"
  }
});


export default App

