import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.backgroud}
      source={require("../assets/background.jpg")}
    ></ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroud: {
    felx: 1,
  },
});
