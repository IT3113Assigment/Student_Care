import { View } from "react-native";
import { Text } from "react-native-paper";
import UserImage from "./UserImage";

export default function UserCard({ user }) {
  const userDetails = user;

  return (
    <View>
      <UserImage url={userDetails.profile_pic} />
    </View>
  );
}
