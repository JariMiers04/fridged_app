import { StyleSheet } from 'react-native';
import Title from '../shared/text/title/Title';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import FoodCard from '../components/FoodCard';

export default function Home() {
  return (
  <><View style={styles.container}>
      <View style={styles.title}>
        <Title>This is in your fridge</Title>
      </View>
      <FoodCard></FoodCard>
  </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 35,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    width: '54%',
    marginTop: '8%',
    paddingTop: 25,
  }
});
