//ini component untuk mereplace header navigation

import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, Modal} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Header({navigation, title}) {

    const openDraw = () => {
        console.log('draw opned')
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.headerBg}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    {/* disini icons  */}
                    <MaterialCommunityIcons
                        name='hamburger'
                        size={29}
                        onPress={openDraw}
                        style={styles.icon}/>
                    <View style={styles.textBox}>

                        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    headerBg : {
        width : '100%',
        borderBottomWidth : 1,
        borderBottomColor : '#eee'
    },
    headerContainer: {
        // backgroundColor: 'coral'
    },
    header: {
        width: '100%',
        marginTop: 24,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'pink'
    },
    headerText: {
        fontFamily: 'lato-regular',
        fontSize: 20,
        // fontWeight: 'bold', letterSpacing: 1,
        fontFamily : 'lobster'
    },
    headerImage: {
        flexDirection: 'row',
        height: 24,
        width: 24,
        marginRight: 10,
    },
    icon: {
        position: 'absolute',
        left: 16,
        // marginRight : 100 , justifyContent : 'center', alignItems : 'flex-start'
    },
    textBox: {
        flexDirection : 'row'
    }
})
