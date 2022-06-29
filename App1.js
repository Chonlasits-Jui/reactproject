import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Stysheet from "./components/Stysheet";
import TextInputExample from "./components/TextInputExample";
import Cat from "./components/Cat";
import Cafe from "./components/Cafe";

const App = () => {
  const showData = () => {
    alert('Hello Button')

  }
  return (
    <View>
      <text>Hello React Native</text>
      <Logo />
      <Button
        onPress={showData}
        title="Click Me" />
      {/* <Stysheet/> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  );
};

export default App;
