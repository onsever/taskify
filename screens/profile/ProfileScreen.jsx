import { View, Text, StatusBar, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import TaskItem from "../../components/TaskItem";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView className={"w-screen h-screen bg-primary"}>
      <StatusBar barStyle="light-content" />
      <View className="flex items-center justify-center">
        <Text className="text-white text-2xl font-bold">Profile Page</Text>
      </View>
      <View className={"flex justify-center items-center mt-20"}>
        <Image
          className={"w-20 h-20 rounded-full mb-5"}
          source={{
            uri: "https://www.nicepng.com/png/detail/388-3889577_girl-vector-3-an-images-hub-girl-vector.png",
          }}
        />
        <Text className={"text-white font-bold mb-3"}>Nisha Bhattarai</Text>
        <Text className={"text-white mb-5"}>nb@gmail.com</Text>
        <View className={"flex flex-row justify-between"}>
          <View
            className={
              "bg-secondary p-5 flex flex-row justify-center items-center mb-3 rounded-lg mr-5"
            }
          >
            <View className={"mr-3"}>
              <Ionicons
                name="checkmark-done"
                size={26}
                color={Colors.completed}
              />
            </View>
            <View>
              <Text className={"text-white "}>Completed Task</Text>
              <Text className={"text-white font-bold text-lg"}> 20</Text>
            </View>
          </View>
          <View
            className={
              "bg-secondary p-7 flex flex-row justify-center items-center mb-3 rounded-lg"
            }
          >
            <View className={"mr-3"}>
              <Ionicons name="timer-outline" size={26} color={Colors.ongoing} />
            </View>
            <View>
              <Text className={"text-white "}>Ongoing Task</Text>
              <Text className={"text-white font-bold text-lg"}> 20</Text>
            </View>
          </View>
        </View>
      </View>
      <View className={"items-center"}>
        <TaskItem styles={"w-[90%]"}></TaskItem>
        <TaskItem styles={"w-[90%]"}></TaskItem>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
