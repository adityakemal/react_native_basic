import React, {useState} from 'react';
import { Text, View, FlatList, Button, TextInput,  TouchableOpacity} from 'react-native';
import {globalStyle, modalStyle} from '../styles/global' 
import {Formik} from 'formik'
//yup validation
import * as yup from 'yup';

const skemaValidFormnya = yup.object({
    title : yup.string()
    .required()
    .min(4),
    body : yup.string().required().min(10), //minimal character harus 10
    rating : yup.string()
    .required()
    .test('apakah num 1 - 5 ?', 'number harus 1 - 5!', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})


export default function HomeForm({dataForm}){
    return(
        <View style={modalStyle.modalContainer}>
            <Formik 
            initialValues={{title: '', body : '', rating : ''}}
            validationSchema={skemaValidFormnya}
            onSubmit={(values, action)=>{ //ACTION DISINI DIPAKE BUAT MERESET FORM SESUDAH DI SUBMIT
                dataForm(values);  
                action.resetForm();  
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
                    onBlur={formikProps.handleBlur('title')} //ini untuk ketika touch input yg selanjutnya maka validationfungsi memvalidasi 
                    />
                    {/* formikProps.errors.title INI MENAMPILKAN ERROR MESSAGE DARI PROPS FORMIK YANG DI OLAH OLEH SKEMA VALIDATION YUP */}
                    {/* formikProps.touched.title ERROR MESSAGE AKAN KELUAR HANYA KETIKA di submit */}
                    <Text style={modalStyle.errorsText}>{ formikProps.touched.title && formikProps.errors.title}</Text> 

                    <TextInput
                    style={modalStyle.input}
                    placeholder='review body'
                    onChangeText={formikProps.handleChange('body')}
                    value={formikProps.values.body}
                    placeholderTextColor = "grey"
                    onBlur={formikProps.handleBlur('body')} //ini untuk ketika touch input yg selanjutnya maka validationfungsi memvalidasi 

                    />
                    <Text style={modalStyle.errorsText}>{formikProps.touched.body && formikProps.errors.body}</Text> 

                    <TextInput
                    style={modalStyle.input}
                    placeholder='Rating ( 1 - 5 )'
                    onChangeText={formikProps.handleChange('rating')}
                    value={formikProps.values.rating}
                    keyboardType='numeric'
                    placeholderTextColor = "grey"
                    onBlur={formikProps.handleBlur('rating')} //ini untuk ketika touch input yg selanjutnya maka validationfungsi memvalidasi 

                    />
                    <Text style={modalStyle.errorsText}>{formikProps.touched.rating && formikProps.errors.rating}</Text> 

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