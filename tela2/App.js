import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Image
} from 'react-native';

const app = () =>{
  return(
   <Image 
   source={require('./img/avengers.jpg')}
   /> 
  )
  
}
export default app;