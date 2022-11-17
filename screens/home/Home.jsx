import { View, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const Details = ({ navigation, route }) => {
  const { values } = route.params;

  return (
    <SafeAreaView>
      <View className="flex items-center justify-center w-screen h-screen">
        <Text>Email: {values.email}</Text>
        <Text>Password: {values.password}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
