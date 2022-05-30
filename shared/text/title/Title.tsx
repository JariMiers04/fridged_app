import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    headerStyle?: boolean;
    children: any;
}

export default function Title ({headerStyle, children} : IProps){

    const styles = StyleSheet.create({
        title: {
            fontFamily: "Cunia",
            fontSize: headerStyle ? 20 : 28,
            color: "#14080E",
            textAlign: 'left'
        }
      });

    return(
        <View>
          <Text style={styles.title}>{children}</Text>
        </View>
    );
}
