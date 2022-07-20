import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native-web";
const Touchable_Example = () => {
  const onPress = (msg) => {
    alert("Alert for: " + msg);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={() => onPress("TouchableNativeFeedback Pressed")}
        >
          <View style={styles.button}>
            <Text>Touchable Native FeedBack (Only Android)</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableHighlight
          onPress={() => onPress("TouchableHighlight Pressed")}
        >
          <View style={styles.button}>
            <Text>Touchable Native FeedBack (Only Android)</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={() => onPress("TouchableOpacity Pressed")}>
          <View style={styles.button}>
            <Text>Touchable Native FeedBack (Only Android)</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={() => onPress("TouchableWithoutFeedback Pressed")}
        >
          <View style={styles.button}>
            <Text>Touchable Native FeedBack (Only Android)</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
export default Touchable_Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
