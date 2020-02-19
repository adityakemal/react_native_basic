import React, {useState} from 'react';
import { Text, View, FlatList} from 'react-native';

import {globalStyle} from '../styles/global'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home({navigation}) {
    const [review, setReview] = useState([
        {title : 'berita heboh ular makan nasi', rating: '5', body : 'lorem ipsum dolor sit lalala', key : '1'},
        {title : 'bocah 5 tahun bisa main tinder', rating: '4', body : 'lorem ipsum dolor sit lalala', key : '2'},
        {title : 'teknologi.id dapat investor 1 miliar', rating: '3', body : 'lorem ipsum dolor sit lalala', key : '3'},
    ])

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.text}>Home Screen</Text>
            <FlatList
            data={review}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetail', item)}>
                    <Text style={globalStyle.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}

