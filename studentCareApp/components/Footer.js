import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.otherDetails}>
        <Text>Uov @2024</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "purple",
    padding: 20,
    bottom: 0,
    left: 0,
    right: 0,
  },
  otherDetails: {
    color: "white",
    textAlign: "center",
  },
});
