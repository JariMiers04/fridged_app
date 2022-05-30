import React, { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    children: any;
    upperCase?: boolean;
}

    const SubTitle = ({children, upperCase} : IProps) =>{

    const styles = StyleSheet.create({
        SubTitle: {
            fontFamily: "PoppinsSemiBold",
            fontSize: 14,
            color: "#14080E",
            textAlign: 'left',
            textTransform: upperCase ? 'uppercase' : "none",
            marginBottom: 5
        }
      });

      return(
        <View>
          <Text style={styles.SubTitle}>{children}</Text>
        </View>
    );
  }

  export default SubTitle;