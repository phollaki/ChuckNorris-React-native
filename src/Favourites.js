import React from 'react'
import {FlatList, Text, TouchableHighlight, StyleSheet, View, StatusBar, Button} from 'react-native'
import Swipeout from 'react-native-swipeout'
import { useFavourites } from './hooks/useFavourites';
import { useJokes } from './hooks/useJokes';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';



const Favourites = ({ navigation }) => {
    const {jokes, index, setIndex} = useJokes()
    const {favourites, remove} = useFavourites()

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


    return (
        <View>
            <FlatList 
            style={{width: '100%'}}
            data={favourites}
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

    },
    cardText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});
export default Favourites