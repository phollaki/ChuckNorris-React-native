import React from 'react'
import {FlatList, Text, TouchableHighlight} from 'react-native'
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
            borderTopColor: 'yellow', 
            borderTopWidth:1,
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
    keyExtractor={(joke)=> joke}
    />
    )
}

export default Favourites