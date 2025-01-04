import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
// import {
//   createStaticNavigation,
//   useNavigation,
// } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "./header";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <Button onPress={() => navigation.navigate("profile")}>Login</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  inputBox: {
    backgroundColor: "white",
  },
  body: {
    flex: 4,
  },
  header: {
    flex: 1,
  },
  footer: {
    backgroundColor: "black",
    height: 100,
  },

  logo: {
    width: Dimensions.get("window").width,
    height: 100,
  },
});
