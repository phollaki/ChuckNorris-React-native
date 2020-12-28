import React from 'react';
import { Switch } from 'react-native-gesture-handler';
import {useTheme} from '../utils/ThemeContext';

export const Toggle = () => {
    // We're also pulling setScheme here!
    const {setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
        <Switch value={isDark} onValueChange={toggleScheme}/>
    );
}