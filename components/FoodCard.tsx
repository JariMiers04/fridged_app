import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Body from "../shared/text/body/Body";
import SubTitle from "../shared/text/subtitle/SubTitle"

interface props {
    image: string;
    title: string;
    date: string;
    weight: number;
}

// let date = new Date();

// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// if(day <10){
//     day = '0' + day;
// }

// if(month < 10){
//     month = '0' + (month+1);
// }

// let today = `${year}-${month}-${day}`;

export default function FoodCard(props : props){
    return(
        <View style={styles.container}>
                {props.image.length > 0 ? <Image source={{uri: props.image }} style={{width: 110, height:110, alignContent: 'center', marginBottom: 15, marginTop: 15}} />: <Image source={require('../assets/imageNotFound.png')} style={{width: 110, height:110, alignContent: 'center', marginBottom: 15, marginTop: 15}}/>}
                <SubTitle upperCase>{props.title}</SubTitle>
                <Body>{props.date}</Body>
                <Body>{props.weight}g</Body>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 13,
        shadowColor: "#000",
        backgroundColor: 'white',
        width: '48%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        marginBottom: 30,
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.35,
          shadowRadius: 15
    },
  });