import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
    active?: boolean;
}

export default function FilterText ({children, active} : IProps){
    if(active === false){
        return(
            <View>
              <Text style={styles.FilterText}>{children}</Text>
            </View>
        );
    } else{
        return(
            <View>
              <Text style={styles.FilterTextActive}>{children}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    FilterText: {
        fontFamily: "PoppinsMedium",
        fontSize: 27,
        color: "#14080E",
        textAlign: 'left'
    }

    FilterTextActive: {
        fontFamily: "PoppinsMedium",
        fontSize: 27,
        color: "#FC704D",
        textAlign: 'left'
    }
  });