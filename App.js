import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import IntroScreen from "./src/screens/intro/intro";
import SignInScreen from "./src/screens/signIn/signIn";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("intro");

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {currentScreen === "signIn" && <SignInScreen handleNavigate={handleNavigate} />}
      {currentScreen === "intro" && <IntroScreen handleNavigate={handleNavigate} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: 'stretch',
  },
});

export default App;
