import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView, StyleSheet} from 'react-native';
import Chucknorris from './src/ChuckNorris';
import { FavouritesProvider } from './src/utils/FavouriteContext';
import Favourites from './src/Favourites';
import { JokeProvider } from './src/utils/JokeContext';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/utils/ThemeContext';

const Tab = createBottomTabNavigator();


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Chucknorris} />
      <HomeStack.Screen name="Favourites" component={Favourites} />
    </HomeStack.Navigator>
  );
}

const FavouritesStack = createStackNavigator();

function FavouritesStackScreen() {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen name="Favourites" component={Favourites} />
    </FavouritesStack.Navigator>
  );
}

const App = () => (
    <NavigationContainer>
    <AppearanceProvider>

    <ThemeProvider>
    <JokeProvider>
    <FavouritesProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <Tab.Navigator>
          <Tab.Screen 
            name="ChuckNorrisScreen" 
            component={HomeStackScreen} 
            options={{
              title: 'Home',
              tabBarIcon: ({focused}) => (
                <MaterialIcons 
                name="home" 
                size={30} 
                color={ focused ? '#2196F3' : 'gray'} />
              ),
            }}
          />
          <Tab.Screen 
          name="Favourites" 
          component={FavouritesStackScreen}
          options={{
            title: 'Favourites',
            tabBarIcon: ({focused}) => (
              <FontAwesome 
              name="list" 
              size={30} 
              color={focused ? '#2196F3' :  'gray'} />
            )
          }}
          />
        </Tab.Navigator>
    </SafeAreaView>

    </FavouritesProvider>
    </JokeProvider>
    </ThemeProvider>
    </AppearanceProvider>
    </NavigationContainer>
    )

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App

