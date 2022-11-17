import { View, Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView className={"w-screen h-screen bg-primary"}>
            <StatusBar barStyle="light-content" />
            <View className="flex items-center justify-center">
                <Text className="text-white text-2xl font-bold">Profile Page</Text>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
