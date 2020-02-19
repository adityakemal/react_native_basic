//ini component untuk mereplace header navigation

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation, title}) {

    const openDraw = () => {
        console.log('draw opned')
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            {/* disini icons  */}
            <MaterialIcons name='menu' size={29} onPress={openDraw} style={styles.icon}/>
            <View style={styles.textBox}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'pink'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    icon: {
        // position : 'absolute', left: 16, marginRight : 100 justifyContent : 'center',
        // alignItems : 'flex-start'

    },
    // textBox :{     width : '100%',     alignItems : 'center',     justifyContent:
    // 'center',     alignItems: 'center', }
})
