import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Title from '../shared/text/title/Title';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import FoodCard from '../components/FoodCard';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// https://blog.openreplay.com/how-to-use-props-to-pass-data-to-child-components-in-react-js

interface Food {
  id: number,
  barcode: string,
  long_name: string,
  short_name: string,
  image: string,
  expiration_date: Date,
  weight: number,
}

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Food[]>([]);

  const getFoodData = () =>{
    fetch('http://localhost:80').then((response)=>response.json())
    .then((json)=> setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false));
  };
  const sortData = () => {
    data.sort((a, b)=> {
      return new Date(a.expiration_date).valueOf() - new Date(b.expiration_date).valueOf();
    })
  } 

  useEffect(()=>{
    getFoodData();
  },[]);
  return (
  <>
  <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.title}>
      {data.length < 1 ? <Title>you haven't fridged yet...</Title> : <Title>This is in your fridge</Title>}
      </View>
      {loading ? <ActivityIndicator /> : null}
      <RefreshControl refreshing={loading} onRefresh={getFoodData} />
      <View style={styles.foodWrapper} >
        {sortData()}
      {data.map(element => <FoodCard image={element.image} title={element.short_name} date={element.expiration_date} weight={element.weight} key={element.id}></FoodCard> )}
      {data.length < 1 ? null : null}
      </View>
  </View>
    </ScrollView>
  </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 50,
    height: '100%'
  },
  foodWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    width: '60%',
    marginTop: '8%',
    paddingTop: 25,
  }
});
