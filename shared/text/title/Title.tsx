import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
}

export default function Title ({children} : IProps){
    return(
        <View>
          <Text style={styles.title}>{children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontFamily: "Cunia",
        fontSize: 28,
        color: "#14080E",
        textAlign: 'left'
    }
  });