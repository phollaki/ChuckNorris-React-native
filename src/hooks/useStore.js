import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

const useStore = (key, initialValue) => {
    const [values, setValues] = useState(initialValue)

    const load = async () => {
        const value = await AsyncStorage.getItem(key)
        if(value) {
            setValues(JSON.parse(value))
        }
    }

    useEffect(() => {
        load()
    }, [])

    useEffect(()=>{
        if(values){
            save(key, JSON.stringify(values))
        }
    }, [values, key])

    const deleteValu = (id) => {
        setValues(values.filter((valu)=> id !== valu))
    }

    const save = async (key, value) => {
        await AsyncStorage.setItem(key, value)
    }

    return { values, setValues, deleteValu }
}

export default useStore