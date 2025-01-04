import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
      <Text>Hi</Text>
      <Button onPress={() => navigation.navigate("profile")}>Login</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
