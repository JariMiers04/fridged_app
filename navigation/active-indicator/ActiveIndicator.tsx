import { Badge } from '@rneui/base';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ActiveIndicator(){

    const styles = StyleSheet.create({
        active: {
            bottom: -25,
            position: 'absolute'
          }
    });

    return(
        <View style={styles.active}>
        <Badge status='primary'badgeStyle={{backgroundColor:'#FC704D'}}></Badge>
        </View>
    )
}