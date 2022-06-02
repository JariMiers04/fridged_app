import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
    expirationMessage?: boolean;
}

export default function Body ({children, expirationMessage} : IProps){

    const styles = StyleSheet.create({
        Body: {
            fontFamily: "PoppinsRegular",
            fontSize: expirationMessage ? 10 : 12,
            color: "#14080E",
            textAlign: 'left',
            marginBottom: 2
        }
      });

    return(
        <View>
          <Text style={styles.Body}>{children}</Text>
        </View>
    );
}