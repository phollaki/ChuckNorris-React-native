import React, { createContext, useState } from 'react'

export const FavouriteContext = createContext()

export const FavouriteProvider = (props) => {
    const [favourites, setFavourites] = useState([])
    return <FavouriteContext.Provider value={{ favourites }} {...props}/>
}