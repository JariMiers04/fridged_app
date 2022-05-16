import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from '@rneui/base';
import FilterText from '../text/filter/FilterText';

export default function Filter(){

  const list = ['All', 'Drinks', 'Fruits', 'Vegetables', 'Fish', 'Meat']
return(
    <View style={styles.container}>
{
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{l}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  }
    </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });