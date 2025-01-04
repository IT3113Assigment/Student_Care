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
import { courses, marks, subjects } from "../db/StudentsDb";

export default function Subject() {
  const courseId = 1;
  const stuId = 1;
  function getAllCourseSubjects(courseId) {
    const subs = subjects.filter((ele) => ele.course_id === courseId);
    return subs;
  }

  function findCourseDetails(tempCourseId) {
    const courseDetails = courses.find((ele) => ele.id === tempCourseId);
    return courseDetails;
  }

  function findSubjectMarks(allSubjects, stuId) {
    const subMarks = allSubjects.map((ele) => {
      let subId = ele.id;
      let subMarks = marks.find(
        (ele) => ele.subject_id === subId && ele.student_id === stuId
      );
      const response = [{ subName: ele.name, subMarks: subMarks.marks }];
      return response;
    });
    return subMarks;
  }

  function findAverageMarks(subMarks) {
    const totalMarks = marks.reduce((sum, ele) => {
      console.log(ele);
    });
  }
  function findAverageMarks(subMarks) {
    const totalMarks = subMarks.reduce((sum, ele) => sum + ele[0].subMarks, 0);
    const average = totalMarks / subMarks.length;
    return Math.round(average);
  }
  const allSubjects = getAllCourseSubjects(courseId);
  const courseDetails = findCourseDetails(courseId);
  const subMarks = findSubjectMarks(allSubjects, stuId);
  const avg = findAverageMarks(subMarks);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <br></br>
        <br></br>

        <View style={styles.b}>
          <View style={styles.card}>
            <Text variant="headlineMedium" style={styles.courseTitle}>
              {courseDetails.name}
            </Text>
            <Text variant="bodyMedium" style={styles.otherDetails}>
              {allSubjects.length} Subjects | Average:{avg}
            </Text>
            <Divider style={styles.topics}>
              <Text variant="bodyMedium" style={styles.topics}>
                Marks Information
              </Text>
              <br></br>
              <View>
                {subMarks.map((ele, index) => (
                  <View key={index} style={styles.row}>
                    <Text style={styles.row.textColor}>{ele[0].subName}</Text>
                    <Text style={styles.row.textColor}>{ele[0].subMarks}</Text>
                  </View>
                ))}
              </View>
            </Divider>
          </View>
        </View>
        <br></br>

        <View style={styles.footer}>
          <Footer />

          <FooterButton />
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
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
    textColor: {
      color: "black",
      fontWeight: "medium",
    },
  },
});
