import React from 'react'
import {FlatList, Text, TouchableHighlight, StyleSheet, View, StatusBar} from 'react-native'
import Swipeout from 'react-native-swipeout'
import { useFavourites } from './hooks/useFavourites'
import { useJokes } from './hooks/useJokes'
import { Feather } from '@expo/vector-icons'; 
import { useTheme } from './utils/ThemeContext'
import { colors } from 'react-native-elements'


const Favourites = ({ navigation }) => {
    const {jokes, index, setIndex} = useJokes()
    const {favourites,  remove} = useFavourites()

    const renderCell = ({item}) => (
        <Swipeout
        right = {
            swipeoutBtns
            }
        autoClose backgroundColor = 'transparent'>
        <TouchableHighlight key={item} underlayColor="grey" onPress={ () => getJoke(item) } style = {styles.cardStyle}>
            <Text style={styles.cardText}>{getJokeForID(item)}</Text>
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
    
    var swipeoutBtns = [
        {
          text: <Feather name="trash-2" size={28} color="black" />,
          backgroundColor: '#ff0000',
          onPress: () => {remove(jokes.value[index].id) },
        }
      ]

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