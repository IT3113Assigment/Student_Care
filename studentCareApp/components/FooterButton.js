import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function FooterButton({ userCourseId }) {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Button
        icon={require("../assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("profile")}
      >
        Home
      </Button>
      <Button
        icon={require("../assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("course")}
      >
        Course
      </Button>
      <Button
        icon={require("../assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("subject")}
      >
        Subject
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    backgroundColor: "black",
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
