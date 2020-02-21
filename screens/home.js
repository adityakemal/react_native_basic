import React, {useState} from 'react';
import {globalStyle, modalStyle} from '../styles/global'
import { Text, View, FlatList, Modal, SafeAreaView} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons';
import HomeForm from './homeForm'



export default function Home({navigation}) {
    const [modal , setModal] = useState(false)
    const [review, setReview] = useState([
        {title : 'berita heboh ular makan nasi', rating: '5', body : 'lorem ipsum dolor sit lalala', key : '1'},
        {title : 'bocah 5 tahun bisa main tinder', rating: '4', body : 'lorem ipsum dolor sit lalala', key : '2'},
        {title : 'teknologi.id dapat investor 1 miliar', rating: '3', body : 'lorem ipsum dolor sit lalala', key : '3'},
    ])

    return (
        <View style={globalStyle.container}>
            <Modal visible={modal} animationType='slide'>

                {/* save area view working in modal  */}
                <SafeAreaView style={{flex : 1}}> 
                    <MaterialIcons name='close' size={24} onPress={()=> setModal(false)} style={modalStyle.close}/>
                    <View style={modalStyle.modalContainer}>
                        <Text>HI IM MODAL</Text>
                        <HomeForm />
                    </View>
                </SafeAreaView>

            </Modal>
            <Text style={globalStyle.text}>Home Screen</Text>
            <MaterialIcons name='add-box' size={28} onPress={()=> setModal(true)} style={modalStyle.toggle}/>

            <FlatList
            data={review}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetail', item)} >
                    <View style={globalStyle.titleTextBox}>
                        <Text style={globalStyle.titleText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )} />
        </View>
    );
}

