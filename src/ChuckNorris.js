import React, { useEffect, useState } from 'react'
import {TouchableHighlight,StyleSheet,View, Text, ActivityIndicator, Image, Button, FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useFavourites } from './hooks/useFavourites';
import { useJokes } from './hooks/useJokes';


const Chucknorris = ({ navigation }) => {
    const {favourites, add, remove} = useFavourites()
    const {jokes, index, setIndex} = useJokes()

    if(jokes.length <= 0) {
        return (
            <View style={{ flex:1, justifyContent: 'center'}}>
                <ActivityIndicator color='black'/>
            </View>
        )
    }
    const favourite = (id) => {
        add(id)
    }
    const unfavourite = (id) => {
        remove(id)
    }
    
    const generate = () => {
        setIndex(Math.floor(Math.random()* Math.floor(573)))
    }

    return (
    <View style={styles.container}>
        <Image 
        source={{ uri: 'http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG15.png',}} 
        style={{ width: 300, height: 300}}
        resizeMode = 'contain'/>

        <Text style={styles.textStyle}>{jokes.value[index].joke}</Text>
        <View>
        { favourites.includes (jokes.value[index].id) ? (
            <Ionicons name="heart-sharp" size={40} color="red" onPress={() => unfavourite (jokes.value[index].id)} />
        ) : (
            <Ionicons name="heart-outline" size={40} color="red" onPress={() => favourite (jokes.value[index].id)}/>
        )}
        </View>
        <Button title="Give me a Joke!" color="red" onPress={generate}/>
        <Button title="Favourites" onPress={()=> navigation.navigate('Favourites')} />
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center',
        width: 350,
    },
    container: {
        padding: 50,
        flex: 1,
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent:'center',
        color:'yellow',
      },
    text:{
        color:'yellow',
    }
})
export default Chucknorris

