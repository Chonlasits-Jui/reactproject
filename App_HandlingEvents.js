import { View, Text, Button,StyleSheet } from "react-native";
import React from "react";

const App = () => {
  const showData = () => {
    alert("Hello");
  };

  return (
    <View style={styles.container}>
      <Text>Buton Example</Text>
      <Button onPress={ showData }
      title="Click Me" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});