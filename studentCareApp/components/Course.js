import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "./header";
import { useState } from "react";
import { students } from "../db/StudentsDb";
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
import UserImage from "./UserImage";
import FooterButton from "./FooterButton";
import { courses } from "../db/StudentsDb";

export default function Course({ route }) {
  const { courseId, stuId } = route.params;
  const tempCourseId = courseId;

  function findCourseDetails(tempCourseId) {
    const courseDetails = courses.find((ele) => ele.id === tempCourseId);
    return courseDetails;
  }

  const userCourseDetails = findCourseDetails(tempCourseId);

  console.log(userCourseDetails);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <br></br>
        <br></br>
        <View style={styles.b}>
          <View styles={styles.card}>
            <Text variant="headlineMedium" style={styles.courseTitle}>
              {userCourseDetails.name}
            </Text>
            <br></br>

            <Text variant="bodyMedium" style={styles.otherDetail}>
              Code:{userCourseDetails.course_code}|Dept:
              {userCourseDetails.department}
            </Text>
            <Divider>
              <Text variant="bodyMedium" style={styles.topics}>
                Course Information
              </Text>
              <br></br>
              <Text variant="bodyMedium" style={styles.otherDetails}>
                Code:{userCourseDetails.course_code}
              </Text>
              <Text variant="bodyMedium" style={styles.otherDetails}>
                Department:{userCourseDetails.department}
              </Text>
              <Text variant="bodyMedium" style={styles.otherDetails}>
                Duration:{userCourseDetails.duration}
              </Text>
              <Text variant="bodyMedium" style={styles.otherDetails}>
                Description:{userCourseDetails.description}
              </Text>
            </Divider>
          </View>
        </View>

        <View style={styles.footer}>
          <Footer />

          <FooterButton userCourseId={courseId} studentId={stuId} />
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
    height: 300,
  },
  courseTitle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  otherDetails: {
    color: "black",
    fontWeight: "medium",
    textAlign: "left",
  },
  topics: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
  },
  otherDetail: {
    color: "black",
    fontWeight: "medium",
    textAlign: "center",
  },
});
