import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
}

export default function SmallHighlight ({children} : IProps){
    return(
        <View>
          <Text style={styles.SmallHighlight}>{children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    SmallHighlight: {
        fontFamily: "PoppinsSemiBold",
        fontSize: 22,
        color: "#14080E",
        textAlign: 'left'
    }
  });