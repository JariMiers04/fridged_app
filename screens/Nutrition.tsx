import { StyleSheet } from 'react-native';
import Title from '../shared/text/title/Title';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Nutrition() {
  return (
    <><View style={styles.container}>
        <View style={styles.title}>
          <Title>Nutrition</Title>
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
