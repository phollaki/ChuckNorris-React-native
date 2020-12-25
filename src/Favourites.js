import React from 'react'
import {FlatList, Text, TouchableHighlight} from 'react-native'
import { useFavourites } from './hooks/useFavourites'

const Favourites = () => {
    const {favourites, add, remove} = useFavourites()

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
    style={{width: '100%'}}
    data={favourites}
    renderItem={renderCell}
    />
    )
}

export default Favourites