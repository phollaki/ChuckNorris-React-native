import React, { useEffect, useState } from 'react'
import {TouchableHighlight,StyleSheet,View, Text, ActivityIndicator, Image, Button, FlatList} from 'react-native'
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
    const getJokeForID = id => {
        const joke = jokes.value.find((joke) => joke.id === id)
        return joke.joke
    }

    const getJoke = (id) => {
        const index = jokes.value.findIndex((joke)=> joke.id === id)
        setIndex(index)
    }

    const renderCell = ({item}) => (
        <TouchableHighlight 
        key={item}
        underlayColor="grey"
        onPress={ () => getJoke(item) }
        style = {{
            textAlign: 'center', 
            padding: 20, 
            borderTopColor: 'yellow', 
            borderTopWidth:1,
            justifyContent: 'center',
            }}
            >
            <Text style={styles.text}>{getJokeForID(item)}</Text>
            </TouchableHighlight>
    )

    return (
    <View style={styles.container}>
        <Image 
        source={{ uri: 'http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG15.png',}} 
        style={{ width: 300, height: 300}}
        resizeMode = 'contain'/>

        <Text style={styles.textStyle}>{jokes.value[index].joke}</Text>
        <View style={styles.buttonStyle}>
        { favourites.includes (jokes.value[index].id) ? (
            <Ionicons name="heart-sharp" size={40} color="red" onPress={() => unfavourite (jokes.value[index].id)} />
        ) : (
            <Ionicons name="heart-outline" size={40} color="red" onPress={() => favourite (jokes.value[index].id)}/>
        )}
        </View>
        <Button title="Give me a Joke!" color="red" onPress={generate}/>
        
        <FlatList 
        style={{width: '100%'}}
        data={favourites}
        renderItem={renderCell}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection:'row',
    },
    textStyle: {
        color: 'yellow',
        textAlign: 'center',
        width: 400,
    },
    container: {
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