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
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <View>
      <Header />
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
      <Button style={styles.button} onPress={logging}>
        <Text style={styles.buttonText}>Login</Text>
      </Button>
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
});
