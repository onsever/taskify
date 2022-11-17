import { View, Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const Home = ({ navigation, route }) => {
  const { values } = route.params;

  return (
    <SafeAreaView className={"w-screen h-screen bg-primary"}>
        <StatusBar barStyle="light-content" />
        <View className="flex items-center justify-center">
            <Text>Email: {values.email}</Text>
            <Text>Password: {values.password}</Text>
        </View>
    </SafeAreaView>
  );
};

export default Home;
