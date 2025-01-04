import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
// import {
//   createStaticNavigation,
//   useNavigation,
// } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/uovlogo.png")} style={styles.logo} />
      </View>
      <Text>UoV Student Care</Text>
      <Button onPress={() => navigation.navigate("profile")}>Login</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: Dimensions.get("window").height,
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
