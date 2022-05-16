import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';


export default function Nav(){
  
return(
  <View style={styles.navigation}>
      
      </View> 

);
}

const styles = StyleSheet.create({
  navigation: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      backgroundColor: 'green',
      width: '100%',
      bottom: 0,
      height: 90,
    },
  });