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

export default function Login() {
  const navigation = useNavigation();
  const [showpw, setShowPw] = useState(false);
  const [userName, setUserName] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const logging = () => {
    const student = students.find((s) => s.username === userName);

    if (student && student.password === pw) {
      alert("Login successfuly");
      navigation.navigate("profile");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <br></br>
      <br></br>

      <View style={styles.b}>
        <Text style={styles.title}>STUDENT LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
        />

        <View style={styles.password}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={pw}
            onChangeText={setPw}
            secureTextEntry={!showpw}
          />

          <TouchableOpacity onPress={() => setShowPw(!showpw)}>
            <Text>{showpw ? "👁️‍🗨️" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button style={styles.button} onPress={logging}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
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
  inputBox: {
    backgroundColor: "white",
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

  logo: {
    width: Dimensions.get("window").width,
    height: 100,
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginTop: 16,
    padding: 0,
    backgroundColor: "purple",
    borderRadius: 4,
    width: "100%",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  error: {
    padding: 3,
    color: "black",
    marginTop: 10,
    backgroundColor: "#f08080",
    borderRadius: 4,
    fontWeight: "bold",
  },
});
