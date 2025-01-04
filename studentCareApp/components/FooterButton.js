import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function FooterButton({ userCourseId, studentId }) {
  const navigation = useNavigation();

  const studentDetails = {
    courseId: userCourseId,
    stuId: studentId,
  };
  return (
    <View style={styles.nav}>
      <Button
        icon={require("../assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("profile", studentId)}
      >
        Home
      </Button>
      <Button
        icon={require("../assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("course", studentDetails)}
      >
        Course
      </Button>
      <Button
        icon={require("../assets/favicon.png")}
        mode="contained"
        onPress={() => navigation.navigate("subject", studentDetails)}
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
