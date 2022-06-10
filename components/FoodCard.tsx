import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, Alert } from "react-native";
import NotificationIcon from "../shared/svgs/NotificationIcon";
import Body from "../shared/text/body/Body";
import SubTitle from "../shared/text/subtitle/SubTitle"

interface props {
    image: string;
    title: string;
    date: Date;
    weight: number;
}

let date = new Date();
const days = 5;
let afterFiveDays = date.setDate(date.getDate() + days).valueOf();

let currentDate = new Date();

let day = currentDate.getDate().toString();

if(parseInt(day) <10){
    day = '0' + day;
}

export default function FoodCard(props : props){

  const expirationMessage = () => {
    if(new Date(currentDate).valueOf() > new Date(props.date).valueOf()){
      Alert.alert(
        `${props.title} has expired`,
        "For your own health please remove this from your fridge.",
        [
          {
            text: "Ask me later",
          },
          {
            text: "No, I am stubborn",
            style: "cancel"
          },
          { text: "OK, Health is important to me"}
        ]
      )
      return <Body expirationMessage>Expired</Body>
    }
    if(new Date(props.date).valueOf() > new Date(currentDate).valueOf() && new Date(props.date).valueOf() < new Date(afterFiveDays).valueOf() ){
      let splitExpirationDate = props.date.toString().split('-');
      let calculateRemaningDays = parseInt(splitExpirationDate[2]) - parseInt(day);
      return <Body expirationMessage>{'< ' + calculateRemaningDays + ' days'}</Body>;
    }
  }

useEffect(()=>{

},[])
    return(
        <View style={styles.container}>
                {props.image.length > 0 ? <Image source={{uri: props.image }} style={{width: 110, height: 110, alignContent: 'center', marginBottom: 15, marginTop: 15}} />: <Image source={require('../assets/imageNotFound.png')} style={{width: 110, height:110, alignContent: 'center', marginBottom: 15, marginTop: 15}}/>}
                <View style={styles.wrapper}>
                  <View style={styles.content}>
                    <SubTitle upperCase>{props.title}</SubTitle>
                    <Body>{props.date}</Body>
                    <Body>{props.weight}g</Body>
                  </View>
                </View>
                <View style={styles.notification}>
                {new Date(afterFiveDays).valueOf() > new Date(props.date).valueOf() ? <NotificationIcon></NotificationIcon>: null}
                {expirationMessage()}
                </View> 

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
    wrapper: {
      flex: 1,
      flexDirection: 'row'
    },
    content: {

    },
    notification: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      bottom: 10,
      right: 15,
      height: 45,
      position: 'absolute',
    }
  });