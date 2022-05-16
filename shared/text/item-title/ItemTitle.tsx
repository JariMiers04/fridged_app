import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
}

export default function ItemTitle ({children} : IProps){
    return(
        <View>
          <Text style={styles.ItemTitle}>{children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    ItemTitle: {
        fontFamily: "Cunia",
        fontSize: 30,
        color: "#14080E",
        textAlign: 'left'
    }
  });