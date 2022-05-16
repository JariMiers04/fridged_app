import { StyleSheet } from 'react-native';
import Title from '../shared/text/title/Title';
import { Text, View } from '../components/Themed';

export default function Recipes() {
  return (
  <><View style={styles.container}>
      <View style={styles.title}>
        <Title>Recipes</Title>
      </View>
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
