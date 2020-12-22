import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 



export default function Header(){
  return (
    <View style={styles.header}>
        <View style={styles.headerElements}>
            <View style={styles.icon}>
                <Entypo name="menu" size={36} color="black" />
            </View>
            <View style={styles.title}>
                <Text style={styles.headerText}>ChuckNorrisApp</Text>
            </View> 
            <View>
                <AntDesign name="heart" size={36} color="black" />
            </View>
        </View>
    </View>
    
    );
}

const styles = StyleSheet.create({
    header: {
      display: 'flex',
      height: 40,
      backgroundColor: 'red',
    },
    headerElements: {
        flexDirection: 'row',
    },
    icon: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logout: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center', 
    },
    headerText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 28,
    },
});