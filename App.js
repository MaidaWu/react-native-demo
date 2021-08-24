import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text clicked.");
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "center ",
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      ></View>
      <View
        style={{ backgroundColor: "yellow", width: 100, height: 100 }}
      ></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "green" };

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
