import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaView, StyleSheet} from 'react-native';
import Chucknorris from './src/ChuckNorris';
import { FavouritesProvider } from './src/utils/FavouriteContext';
import Favourites from './src/Favourites';
import { JokeProvider } from './src/utils/JokeContext';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const App = () => (

  <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <JokeProvider>
      <FavouritesProvider>
      <Switch/>
        <Tab.Navigator>
          <Tab.Screen 
            name="ChuckNorrisScreen" 
            component={Chucknorris} 
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
          component={Favourites}
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

