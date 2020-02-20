import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export default function ReviewDetail({navigation}) {

    const pressHandler = () => {
      navigation.goBack()
    }
    console.log(navigation);
    const rating = [
        require('../assets/rating-1.png'),
        require('../assets/rating-2.png'),
        require('../assets/rating-3.png'),
        require('../assets/rating-4.png'),
        require('../assets/rating-5.png'),
    ]

    console.log(rating[0].image);
    
    
    return (
        <View style={styles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text> rating berita : '{navigation.getParam('rating')}' </Text>
            <Image source={rating[parseInt(navigation.getParam('rating')-1)]} />
            <Button title='back to home' onPress={pressHandler}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
