import {View, StatusBar, Text, Image, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = ({ navigation }) => {
    return (
        <SafeAreaView className={"w-screen h-screen bg-primary"}>
            <StatusBar barStyle="light-content" />
            <View className={"mx-4 my-8"}>
                <Text className={"text-white font-bold text-3xl tracking-wide"}>Manage your {'\n'}team & everything {'\n'}with { <Text className={"text-bittersweet underline"}>Taskify</Text>}. </Text>
            </View>
            <View className={"flex items-center w-full"}>
                <Image className={"w-72 h-72"} source={require("../../assets/onboarding-1.png")} />
                <Text className={"text-frenchGray w-full p-4 leading-5 tracking-wide mt-4 text-xl"}>When you are overhelmed by the{'\n'}amount of work you have on your{'\n'}plate, stop and rethink.</Text>
            </View>
            <Pressable style={( { pressed } ) => [ { opacity: pressed ? 0.5 : 1.0 } ]} className={"flex items-center p-4 rounded-full w-1/2 mx-auto bg-bittersweet mt-4"} onPress={() => navigation.replace("Login")}>
                <Text className={"text-white font-bold text-xl tracking-wide"}>Let's Start</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default OnBoarding;
