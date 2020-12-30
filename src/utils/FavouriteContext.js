import React, { createContext, useEffect, useReducer, useState } from "react";
import useStore from "../hooks/useStore";
import { ADD, initialState, REMOVE, reducer, REFRESH } from "../reducers/FavouriteReducer";


export const FavouritesContext = createContext()

export const FavouritesProvider = (props) => {
    const { values, setValues, deleteValu} = useStore('favourites', initialState)
    const [favourites, dispatch] = useReducer(reducer, values)
   
    useEffect(()=> {
        dispatch({type:REFRESH, payload: values})
    }, [values])
    const add = (id) => {
        dispatch({ type: ADD, payload: id})
        setValues([...values, id])
    }
    const remove = (id) => {
        dispatch({type: REMOVE, payload: id})
        deleteValu(id)
    }
    

    return <FavouritesContext.Provider 
    value={{favourites: values, add, remove}} {...props} />
}