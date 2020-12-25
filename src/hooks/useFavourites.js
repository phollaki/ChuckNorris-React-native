import { useContext } from 'react'
import { FavouritesContext } from '../utils/FavouriteContext'

export const useFavourites = () => {
    const context = useContext(FavouritesContext)
    return context
}