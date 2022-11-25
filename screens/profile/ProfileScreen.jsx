import { View, Text, StatusBar, Image, ActivityIndicator } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import TaskItem from "../../components/TaskItem";
import ActionButton from "../../components/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/authSlice";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { fetch, result, loaded, loading, error } = useFetch();
  const [completedTask, setCompletedTask] = useState([]);
  const [outgoingTask, setOutgoingTask] = useState([]);

  useEffect(() => {
    fetch("task");
  }, []);

  useEffect(() => {
    if (loaded) {
      if (result) {
        setCompletedTask(result.filter((x) => x.isComplete));
        setOutgoingTask(result.filter((x) => !x.isComplete));
      }

      if (error) {
        console.log("error ===========>", error);
      }
    }
  }, [loaded, result]);

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
        <Text className={"text-white font-bold mb-3"}>
          {user.firstName} {user.lastName}
        </Text>
        <Text className={"text-white mb-5"}>{user.email}</Text>
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
              {loading ? (
                <ActivityIndicator className={"py-2"} />
              ) : (
                <Text className={"text-white font-bold text-lg"}>
                  {" "}
                  {completedTask.length}
                </Text>
              )}
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
              {loading ? (
                <ActivityIndicator className={"py-2"} />
              ) : (
                <Text className={"text-white font-bold text-lg"}>
                  {" "}
                  {outgoingTask.length}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
      {/* <View className={"items-center"}>
        <TaskItem styles={"w-[90%]"}></TaskItem>
        <TaskItem styles={"w-[90%]"}></TaskItem>
      </View> */}
      <ActionButton onAction={() => dispatch(logout())}>
        <Text>Logout</Text>
      </ActionButton>
    </SafeAreaView>
  );
};

export default ProfileScreen;
