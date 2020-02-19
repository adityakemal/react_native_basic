import React from 'react';
import { Text, View, Button } from 'react-native';
import { aboutStyle } from '../styles/global';

export default function About({navigation}) {
  return (
    <View style={aboutStyle.container}>
      <Text style={aboutStyle.text}>About Screen</Text>
    </View>
  );
}


