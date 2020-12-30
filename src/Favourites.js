import React, { useState } from 'react'
import {FlatList, Text, TouchableHighlight, StyleSheet, View, StatusBar, Button, SafeAreaView} from 'react-native'
import { useFavourites } from './hooks/useFavourites';
import { useJokes } from './hooks/useJokes';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';



const Favourites = ({ navigation }) => {
    const {jokes, index, setIndex} = useJokes()
    const {favourites, remove} = useFavourites()
    const [searchState, setSearchState] = useState('')

    const renderCell = ({item}) => (
        <TouchableHighlight key={item} underlayColor="grey" onPress={ () => getJoke(item) } style = {styles.cardStyle}>
            <View>
            <Text style={styles.cardText}>{getJokeForID(item)}</Text>
            <Ionicons name="heart-sharp" size={40} color="red" onPress={() => unfavourite (item)} />
            </View>
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
    
    const unfavourite = (id) => {
        const index = jokes.value.findIndex((joke)=> joke.id === id)
        setIndex(index)
        remove(id)
    }

    const handleText = (text) => {
        setSearchState(text)
    }

    const searchedFav = (items) => {
        const containText = jokes.value.filter((joke) => items.includes(joke.id))
        const selected = []
        for (item of containText) {
            if(item.joke.includes(searchState.toLowerCase())){
                selected.push(item.id)
            }
        }
            return selected
        }
    
    return (
        <View>
            <SearchBar placeholder="Type Here..." 
            round 
            lightTheme
            onChangeText={handleText} 
            value={searchState}/>
            <FlatList 
            style={{width: '100%'}}
            data={searchedFav(favourites)}
            renderItem={renderCell}
            keyExtractor={(item)=> item.toString()}
            /> 
        </View>
    )
    
}
const styles = StyleSheet.create({
    cardStyle: {
        textAlign: 'center', 
        padding: 20, 
        borderTopWidth:1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        borderBottomColor: 'gray',
        borderTopColor: 'gray',
    },
    cardText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2196F3',
    },
});
export default Favourites