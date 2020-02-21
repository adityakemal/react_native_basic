import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60
    },
    text: {
        fontFamily: 'lobster',
        fontSize: 24,
        marginBottom : 18
    },
    titleTextBox :{
        backgroundColor: 'skyblue',
        marginTop: 6,
        borderRadius : 10,
    },
    titleText: {
        padding: 15,
        textAlign: 'center',
        fontSize : 14,
        textTransform : 'uppercase',
        fontWeight : 'bold',
        color : 'maroon',
    },
});

export const aboutStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'lobster',
        fontSize: 24,
        color: 'coral'
    }
});


export const modalStyle = StyleSheet.create({
    modalContainer : {
        flex : 1,
        backgroundColor : 'whitesmoke',
        width : '100%',
        paddingHorizontal :35,
        paddingVertical :35,
    },
    close : {
        alignSelf : 'flex-start',
        marginLeft: 10,
        padding :10

        
    },    
    toggle : {
        alignSelf : 'center',
        padding :10
    },

    input : {
        padding : 10,
        fontSize : 18,
        textAlign : 'left',
        borderWidth : 1,
        borderRadius : 10,
        borderColor : 'maroon',
        marginTop :10,
        color : 'black'
    },
    buttonForm : {
        borderRadius : 10,
        backgroundColor: 'skyblue',
        padding : 10,
        textAlign : 'center'
    },
    buttonFormText : {
        borderRadius : 10,
        fontSize : 18,
        textAlign : 'center'
    },
    errorsText : {
        color : 'red'
    }
})