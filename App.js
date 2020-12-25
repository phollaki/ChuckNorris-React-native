import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import ChuckNorris from './src/ChuckNorris'
import Header from './shared/Header'
import { FavouriteProvider } from './src/utils/FavouriteContext';

const App = () => (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
      <Header/>
      <FavouriteProvider>
        <ChuckNorris/>
      </FavouriteProvider>
    </SafeAreaView>
    )


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App

