import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
}

export default function SubTitle ({children} : IProps){
    return(
        <View>
          <Text style={styles.SubTitle}>{children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    SubTitle: {
        fontFamily: "PoppinsSemiBold",
        fontSize: 14,
        color: "#14080E",
        textAlign: 'left'
    }
  });