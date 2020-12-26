import React from 'react'
import {FlatList, Text, TouchableHighlight} from 'react-native'
import Swipeout from 'react-native-swipeout'
import { useFavourites } from './hooks/useFavourites'
import { useJokes } from './hooks/useJokes'
import { Feather } from '@expo/vector-icons'; 


const Favourites = ({ navigation }) => {
    const {favourites, add, remove} = useFavourites()
    const {jokes, index, setIndex} = useJokes()

    const renderCell = ({item}) => (
        <Swipeout
        right = {swipeoutBtns}
        autoClose
        backgroundColor = 'transparent'
        >
        <TouchableHighlight 
        key={item}
        underlayColor="grey"
        onPress={ () => getJoke(item) }
        style = {{
            textAlign: 'center', 
            padding: 20, 
            borderColor: 'yellow',
            borderTopWidth:1,
            borderBottomWidth: 1,
            justifyContent: 'center',
            }}
            >
            <Text style={{color:'yellow'}}>{getJokeForID(item)}</Text>
        </TouchableHighlight>
        </Swipeout>
    )
    
    const getJokeForID = id => {
        const joke = jokes.value.find((joke) => joke.id === id)
        return joke.joke
    }

    const getJoke = (id) => {
        const index = jokes.value.findIndex((joke)=> joke.id === id)
        setIndex(index)
    }

    const deleteJoke = (id) => {
        remove(id)
    }
    
    var swipeoutBtns = [
        {
          text: <Feather name="trash-2" size={28} color="black" />,
          backgroundColor: '#ff0000',
          onPress: () => { remove(jokes.value[index].id) }
          
        }
      ]

    return (
            <FlatList 
            style={{width: '100%', backgroundColor: 'black'}}
            data={favourites}
            renderItem={renderCell}
            keyExtractor={(item)=> item.toString()}
            />  
    )
}
export default Favourites