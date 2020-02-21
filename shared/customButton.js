import React from 'react';
import { StyleSheet ,Text, View,  TouchableOpacity} from 'react-native';



export default function CustomButton ({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    buttonBox: {
        padding : 10,
        backgroundColor : 'coral',
        borderRadius : 10
    },
    buttonText : {
        fontSize : 18,
        color : 'white',
        fontWeight: 'bold',
        textAlign : 'center',
        textTransform : 'uppercase'
    }
})