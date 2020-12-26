import React, { StyleSheet, View, createContext, useEffect, useState, ActivityIndicator } from 'react'

export const JokeContext = createContext()

export const JokeProvider = (props) => {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(0)    

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

    
     
    return <JokeContext.Provider 
    value={{ jokes, index, setIndex }} {...props} />
}