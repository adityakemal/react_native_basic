import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function ReviewDetail({navigation}) {

    const pressHandler = () => {
      navigation.goBack()
    }
    console.log(navigation);
    
    return (
        <View style={styles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text> rating berita : '{navigation.getParam('rating')}' </Text>

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
