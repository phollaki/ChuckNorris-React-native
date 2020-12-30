import React, { createContext, useEffect, useState } from "react";
import useStore from "../hooks/useStore";


export const FavouritesContext = createContext()

export const FavouritesProvider = (props) => {
    const { values, setValues, deleteValu} = useStore('favourites', [])
   
    const add = (id) => {
        if(!values.includes(id)){
            setValues([...values, id])
        }
    }

    const remove = (id) => {
        deleteValu(id)
    }

    return <FavouritesContext.Provider 
    value={{favourites: values, add, remove}} {...props} />
}