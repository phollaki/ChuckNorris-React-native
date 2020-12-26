import { useContext } from "react"
import { JokeContext } from "../utils/JokeContext"

export const useJokes = () => {
    const context = useContext(JokeContext)
    return context
}