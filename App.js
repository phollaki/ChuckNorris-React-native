import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView, StyleSheet} from 'react-native';
import Chucknorris from './src/ChuckNorris';
import { FavouritesProvider } from './src/utils/FavouriteContext';
import Favourites from './src/Favourites';
import { JokeProvider } from './src/utils/JokeContext';

const Stack = createStackNavigator()

const App = () => (
    <NavigationContainer>

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <JokeProvider>
      <FavouritesProvider>
      <Stack.Navigator>
        <Stack.Screen 
          name="ChuckNorrisScreen" 
          component={Chucknorris} 
          options={{
            title: 'Chuck Norris Jokes'
          }}
        />
        <Stack.Screen 
        name="Favourites" 
        component={Favourites}
        options={{
          title: 'My Favourite Jokes'
        }}
         />
      </Stack.Navigator>
      </FavouritesProvider>
      </JokeProvider>
    </SafeAreaView>

    </NavigationContainer>

    )


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App

