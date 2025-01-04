import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Course from "./components/Course";
import Subject from "./components/Subject";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="course">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headershown: false }}
        ></Stack.Screen>
        <Stack.Screen name="profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="course" component={Course}></Stack.Screen>
        <Stack.Screen name="subject" component={Subject}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
