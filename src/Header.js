import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header() {
    const openMenu = () => {
        //navigation.openDrawer()
    }
    
    return (
        <View styles = { styles.header }>
            <MaterialIcons name='menu' size={36} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style = {styles.headerText}>ChuckNorrisApp</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'yellow',
        letterSpacing: 1,
    },
    icon: {
        left: 16,
        color: 'yellow',
    }
});