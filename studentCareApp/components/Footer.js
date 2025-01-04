import { View, StyleSheet } from "react-native";
export default function Footer() {
  return (
    <View style={styles.footer}>
      <view style={styles.otherDetails}>Uov @2024</view>
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
