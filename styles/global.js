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
    }
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
