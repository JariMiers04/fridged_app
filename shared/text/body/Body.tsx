import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
    expirationMessage?: boolean;
    alignCenter?: boolean;
    background?: boolean
}

export default function Body ({children, expirationMessage, alignCenter, background} : IProps){

    const styles = StyleSheet.create({
        Body: {
            fontFamily: "PoppinsRegular",
            fontSize: expirationMessage ? 10 : 12,
            color: "#14080E",
            textAlign: alignCenter ? 'center' : 'left',
            marginBottom: 2,
            opacity: background ? 0.5 : 1
        }
      });

    return(
        <View>
          <Text style={styles.Body}>{children}</Text>
        </View>
    );
}