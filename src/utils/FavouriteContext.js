import React, { createContext, useState } from "react";

export const FavouritesContext = createContext()

export const FavouritesProvider = (props) => {
    const [favourites, setFavourites] = useState([])

    const add = (id) => {
        if(!favourites.includes(id)){
            setFavourites([...favourites, id])
        }
    }
    const remove = (id) => {
        const filtered = favourites.filter((favourite) => favourite !== id)
        setFavourites(filtered)
    }

    return <FavouritesContext.Provider 
    value={{favourites, setFavourites, add, remove}} {...props} />
}