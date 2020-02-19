import React, {useState} from 'react';
import Home from './screens/home'
import About from './screens/about'
import Detail from './screens/reviewDetail'
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Navigator from './routes/drawer'



const getFont = () => Font.loadAsync({
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  'lobster': require('./assets/fonts/Lobster-Regular.ttf'),
}); 

export default function App() {
  const [loadFont, setLoadFont] = useState(false)
  if(loadFont){
    return (
      <Navigator />
    );
  }else{
    return(
      <AppLoading 
      startAsync={getFont}
      onFinish={()=>setLoadFont(true)}
      />
    )
  }
}
