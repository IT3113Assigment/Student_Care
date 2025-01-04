import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Header from "./header";
import { useState } from "react";
import { students } from "../db/StudentsDb";
import { TextInput } from "react-native-gesture-handler";
import Footer from "./Footer";
import {
  PaperProvider,
  Text,
  TextInput,
  Button,
  IconButton,
  Divider,
  Divide,
} from "react-native-paper";

export default function Profile(route) {
  const userName = route.params;
  function getUserDetails(userName) {
    const userData = students.find((ele) => (ele.username = userName));
    return userData;
  }
  const user = getUserDetails("Alice.j");
  console.log(user);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <br></br>
        <br></br>
        <View style={styles.b}>
          <View style={styles.card}></View>
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </PaperProvider>
  );
}

const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: h,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  b: {
    height: h * 0.69,
    width: "100%",
  },
  header: {
    height: h * 0.15,
    width: "100%",
  },
  footer: {
    height: h * 0.1,
    width: "100%",
  },
  inputBox: {
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    width: 300,
    height: 400,
  },
  userName: {
    color: "black",
    fontWeight: "bold",
  },
  otherDetails: {
    color: "black",
    textAlign: "center",
  },
  topics: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  description: {
    color: "black",
    textAlign: "left",
  },
  s: {
    flex: 6,
  },
});
