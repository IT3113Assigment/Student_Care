import { View, Image, StyleSheet } from "react-native";

export default function UserImage({ url }) {
  const profileImageUrl = url;
  console.log(profileImageUrl);

  return (
    <View>
      <Image
        source={profileImageUrl}
        width={100}
        height={100}
        style={styles.card}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});
