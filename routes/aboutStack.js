import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import About from '../screens/about.js'

import React from 'react'
import Header from '../shared/header'

const screens = {
    Home : {
        screen : About,
        // navigationOptions : {
        //     // title : 'About TimeZone', // ini defaultnya componen screen yg akan tampil
        //     // headerStyle : {backgroundColor : '#eee'} // ini pindah ke defaultNavigationOption
        //     headerTitle : () => <Header />
        // }
        // COSTUM WITH COMPONENT
        navigationOptions : ({navigation}) => {
            return {
                header : ()=> <Header navigation={navigation} title='About TimeZone' />,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions : {
        // headerTintColor : 'black',
        // headerStyle : {backgroundColor : '#eee', height : 60}
    }
})

//import pakai createAppContainer

export default AboutStack