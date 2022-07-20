import { StyleSheet, Text, View, Button,Alert } from "react-native";
import React from "react";

    const AlertComponent = () => {
    const simpleAlertHanler = () => {
        alert('Hello I am Simple Alert from JavaScript')
    };
    const twoOpionAlerHanler = () => {
        //use Alert from React Native
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two optin alert from React Native',
            [
                {
                    text:'Yes',
                    onPress:()=>alert('Yes Pressed')
                },
                {
                    text:'No',
                    onPress:()=>alert('No Pressed'),
                    style:'cancel'
                }
            ],
            //click ing out side of 
            {cancelable:false}
        );
    };


  return (
    <View style={styles.container}>
      <Button title="Simle Alert" onPress={simpleAlertHanler} />
      <Button title=" Alert with Tow Options" onPress={twoOpionAlerHanler} />
    </View>
  );
};

export default AlertComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
