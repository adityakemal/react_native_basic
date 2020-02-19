import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home.js'
import ReviewDetail from '../screens/reviewDetail.js'
import React from 'react'
import Header from '../shared/header'

const screens = {
    Home : {
        screen : Home,
        // navigationOptions : {
        //     // title : null, // ini defaultnya componen screen yg akan tampil
        //     // headerStyle : {backgroundColor : '#eee'} // ini pindah ke defaultNavigationOption
        // }

        //INI UNTUK COSTUM HEADER:
        navigationOptions : ({navigation}) => {
            return {
                headerTitle : ()=> <Header navigation={navigation} title='Home TimeZone'/>,
            }
        }
    },
    ReviewDetail :{
        screen : ReviewDetail,
        navigationOptions : {
            // title : 'Detail',
            // headerStyle : {backgroundColor : '#eee'} // ini pindah ke defaultNavigationOption
        }
    },

}



const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions : { //STYLE GLOBAL UNTUK HEADER
        // headerTintColor : 'black',
        headerStyle : {
            backgroundColor : '#eee',
        }

    }
})

//import pakai createAppContainer

//tanpa app drawer
// export default createAppContainer(homeStack) 

//use app drawer
// export default createAppContainer(homeStack) 
export default HomeStack 

