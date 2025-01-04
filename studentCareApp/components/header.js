import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>UoV Student Care</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/uovlogo.png")} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    height: 60,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },

  logo: {
    width: "90%",
    height: 100,
    top: 5,
    left: 0,
    right: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
});
