import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import Chucknorris from './src/ChuckNorris';



const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="auto" />
      <Chucknorris></Chucknorris>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000"
  }
});


export default App

