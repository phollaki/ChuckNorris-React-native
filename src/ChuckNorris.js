import React, { useEffect, useState } from 'react'
import {View, Text, ActivityIndicator, Image, Button} from 'react-native'

const Chucknorris = ({title}) => {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(1)

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

    return (
    <View style={{ flex: 1, alignItems: 'center' }}>

        <Text style={{ color: 'yellow', fontWeight:'bold',fontSize: 40, marginBottom: 10}}>{title}</Text>

        <Image 
        source={{ uri: 'http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG3.png',}} 
        style={{ width: 400, height: 400}}/>

        <Text style={{ width: 400, textAlign:'center',color:'yellow'}}>{jokes.value[index].joke}</Text>

        <Button 
        title="Give Me a Joke!"
        color='red'
        onPress={generate}/>

    </View>
    )
}

export default Chucknorris