import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
}

export default function Body ({children} : IProps){
    return(
        <View>
          <Text style={styles.Body}>{children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    Body: {
        fontFamily: "PoppinsRegular",
        fontSize: 12,
        color: "#14080E",
        textAlign: 'left',
        marginBottom: 2
    }
  });