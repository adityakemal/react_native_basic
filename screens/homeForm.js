import React, {useState} from 'react';
import { Text, View, FlatList, Button, TextInput,  TouchableOpacity} from 'react-native';
import {globalStyle, modalStyle} from '../styles/global' 
import {Formik} from 'formik'

export default function HomeForm(){
    return(
        <View style={modalStyle.modalContainer}>
            <Formik 
            initialValues={{title: '', body : '', rating : ''}}
            onSubmit={(values)=>{
                console.log(values);    
            }}
            >
            {(formikProps)=>(
                <View>
                    <TextInput
                    style={modalStyle.input}
                    placeholder='review title'
                    onChangeText={formikProps.handleChange('title')}
                    value={formikProps.values.title}
                    placeholderTextColor = "grey"
                    />

                    <TextInput
                    style={modalStyle.input}
                    placeholder='review body'
                    onChangeText={formikProps.handleChange('body')}
                    value={formikProps.values.body}
                    placeholderTextColor = "grey"

                    />

                    <TextInput
                    style={modalStyle.input}
                    placeholder='Rating ( 1 - 5 )'
                    onChangeText={formikProps.handleChange('rating')}
                    value={formikProps.values.rating}
                    keyboardType='numeric'
                    placeholderTextColor = "grey"
                    />
                    <TouchableOpacity onPress={formikProps.handleSubmit} style={modalStyle.buttonForm}>
                        <Text style={modalStyle.buttonFormText} >Submit ae</Text>
                    </TouchableOpacity>
                    {/* <Button title='submit' color='maroon'  /> */}
                </View>
            )}
            </Formik>
        </View>
    )
}