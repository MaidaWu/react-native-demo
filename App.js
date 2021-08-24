import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDimensions } from "@react-native-community/hooks";
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
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello Maida! - A really really long context and we want to see what will
        happen
      </Text>
      <Button
        color="orange"
        title="Click me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      <TouchableHighlight onPress={() => console.log("Image tapped.")}>
        <Image
          blurRadius={0}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Image source={require("./assets/favicon.png")} />
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "70%",
          height: "7%",
        }}
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
