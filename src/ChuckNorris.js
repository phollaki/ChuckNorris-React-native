import React, { useEffect, useState } from 'react'
import {StyleSheet,View, Text, ActivityIndicator, Image, Button, FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const Chucknorris = ({}) => {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(0)
    const [favourites, setFavourites] = useState([])

    const load = async () => {
        const response = await fetch(
            'http://api.icndb.com/jokes'
            )
            const data = await response.json()
            setJokes(data)
    }   

    useEffect(() => {
        load()
    }, [])

    if(jokes.length <= 0) {
        return (
            <View style={{ flex:1, justifyContent: 'center'}}>
                <ActivityIndicator color='black'/>
            </View>
        )
    }

    const generate = () => {
        setIndex(Math.floor(Math.random()* Math.floor(573)))
    }

    const favourite = (id) => {
        if(!favourites.includes(id)){
            setFavourites([...favourites, id])
        }
    }
    const unfavourite = (id) => {
        const filtered = favourites.filter((favourite) => favourite !== id)
        setFavourites(filtered)
    }

    const renderCell = () => {

    }

    return (
    <View style={styles.viewStyle}>
        
        <Image 
        source={{ uri: 'http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG15.png',}} 
        style={{ width: 300, height: 300}}
        resizeMode = 'contain'/>

        <Text style={styles.textStyle}>{jokes.value[index].joke}</Text>

        <Text style={styles.textStyle}>{JSON.stringify(favourites)}</Text>
        
        
        <View style={styles.buttonStyle}>
        { favourites.includes (jokes.value[index].id) ? (
            
            <Ionicons name="heart-sharp" size={40} color="red" onPress={() => unfavourite (jokes.value[index].id)} />   

        ) : (
            <Ionicons name="heart-outline" size={40} color="red" onPress={() => favourite (jokes.value[index].id)}/>
        )
        }
        </View>
        <Button title="Give me a Joke!" color="red" onPress={generate}/>


        <FlatList
        data = {favourites}
        renderItem = {renderCell}
        />
        
    </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        color:'yellow',
        alignItems: 'center',
    },
    buttonStyle: {
        flexDirection:'row',
    },
    textStyle: {
        color: 'yellow',
        textAlign: 'center',
        width: 400,
    }
})
export default Chucknorris