import React from 'react'
import { render } from 'react-dom'
import { SafeAreaView } from 'react-native'
import {FlatList, Text, TouchableHighlight} from 'react-native'
import Swipeout from 'react-native-swipeout'
import { useFavourites } from './hooks/useFavourites'
import { useJokes } from './hooks/useJokes'

const Favourites = ({ navigation }) => {
    const {favourites, add, remove} = useFavourites()
    const {jokes, setIndex} = useJokes()

    const renderCell = ({item}) => (
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
    )
    
    const getJokeForID = id => {
        const joke = jokes.value.find((joke) => joke.id === id)
        return joke.joke
    }

    const getJoke = (id) => {
        const index = jokes.value.findIndex((joke)=> joke.id === id)
        setIndex(index)
    }
    
    
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