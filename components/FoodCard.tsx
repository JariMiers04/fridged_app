import React from "react";
import { StyleSheet, View, Image } from "react-native";
import SubTitle from "../shared/text/subtitle/SubTitle"

interface props {
    image: string;
    title: string;
    date: Date;
    weight: string;
    notification?: boolean;
}

export default function FoodCard(){
    return(
        <View style={styles.container}>
            <Image source={{uri: "../assets/adaptive-icon.png"}} style={{width: 400, height: 400}} />
            <SubTitle style={styles.title}>tomatoes</SubTitle>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 13,
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.35,
          shadowRadius: 15
    },
    title:{
        textTransform: 'uppercase'
    }
  });