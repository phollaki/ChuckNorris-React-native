import React, { useState } from 'react'
import {TextInput,StyleSheet,View, Text, ActivityIndicator, Image, Button} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useFavourites } from './hooks/useFavourites';
import { useJokes } from './hooks/useJokes';

const Chucknorris = ({ navigation }) => {
    const {favourites, add, remove} = useFavourites()
    const {jokes, index, setIndex} = useJokes()


    if(jokes.length <= 0) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator/>
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
        style={styles.imageStyle}/>

        <Text style={styles.textStyle}>{jokes.value[index].joke}</Text>
        <View>
        { favourites.includes (jokes.value[index].id) ? (
            <Ionicons name="heart-sharp" size={40} color="red" onPress={() => unfavourite (jokes.value[index].id)} />
        ) : (
            <Ionicons name="heart-outline" size={40} color="red" onPress={() => favourite (jokes.value[index].id)}/>
        )}
        </View>
        <Button title="Give me a Joke!" color="red" onPress={generate}/>
    </View>    
    )
}

const styles = StyleSheet.create({
    activityIndicator: {
        color: 'black',
        flex: 1,
        justifyContent: 'center',
    },
    imageStyle: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    textStyle: {
        color: '#2196F3',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
        width: 350,
        padding: 5,
    },
    container: {
        padding: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'black'
      },
})
export default Chucknorris

