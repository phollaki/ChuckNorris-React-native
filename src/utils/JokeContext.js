import React, { createContext, useState } from 'react'
import { FavouritesContext } from './FavouriteContext'

export const JokeContext = createContext()

export const JokeProvider = (props) => {
    const [jokes, setJokes] = useState([])

    return <FavouritesContext.Provider value={{}} {...props} />
}