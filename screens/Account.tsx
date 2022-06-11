import { StyleSheet } from 'react-native';
import Title from '../shared/text/title/Title';
import { Text, View } from '../components/Themed';
import React from 'react';
import Body from '../shared/text/body/Body';

export default function Account() {
  return (
  <><View style={styles.container}>
      <View style={styles.title}>
        <Title>Account</Title>
      </View>
      <View style={{alignItems: 'center', flex: 1, width: '100%', top: '35%', left: -20}}>
        <Body alignCenter background>Coming Soon...</Body>
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
