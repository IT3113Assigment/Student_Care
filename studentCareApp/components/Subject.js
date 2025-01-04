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

export default function Subject() {
  return <Text>Hi</Text>;
}
