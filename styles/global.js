import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: 60
    },
    text: {
        fontFamily: 'lobster',
        fontSize: 24
    },
    titleText: {
        padding: 10,
        marginTop: 6,
        backgroundColor: 'skyblue',
        textAlign: 'center'
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
