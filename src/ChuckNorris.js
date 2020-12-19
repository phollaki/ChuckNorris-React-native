import React, { useEffect, useState } from 'react'
import {View, Text, ActivityIndicator, Image, Button, FlatList} from 'react-native'



const Chucknorris = ({title}) => {
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
    <View style={{flex: 1, alignItems: 'center' }}>

        <Text style={{ color: 'yellow', fontWeight:'bold',fontSize: 40, marginBottom: 10}}>{title}</Text>

        <Image 
        source={{ uri: 'http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG15.png',}} 
        style={{ width: 300, height: 300}}
        resizeMode = 'contain'/>

        <Text style={{ width: 300, textAlign:'center',color:'yellow'}}>{jokes.value[index].joke}</Text>

        <Text style={{ color:'yellow'}}>{JSON.stringify(favourites)}</Text>
        
        
        <View style={{flexDirection:'row'}}>
        { favourites.includes (jokes.value[index].id) ? (
            <
            Button title ="Unfavourites" onPress={() => unfavourite (jokes.value[index].id)} 
            />
        ) : (
            <
            Button title ="Favourites" onPress={() => favourite (jokes.value[index].id)} 
            />
        )
        }
        <Button title="Give me a Joke!" color="red" onPress={generate}/>
        </View>

        <FlatList
        data = {favourites}
        renderItem = {renderCell}
        />
        
    </View>
    )
}

export default Chucknorris