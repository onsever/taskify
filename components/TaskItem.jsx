import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const TaskItem = ({
  name,
  description,
  startDate,
  endDate,
  completed,
  styles,
}) => {
  return (
    <View className={`bg-secondary w-full rounded-2xl mb-2 p-4 ${styles}`}>
      <View className={"flex flex-row items-center justify-between mb-2"}>
        <Text className={"text-white font-bold text-xl tracking-wider"}>
          {name}
        </Text>
        <View className={"bg-anakiwa px-2 py-1 rounded-full"}>
          <Text className={"text-white font-bold"}>6d</Text>
        </View>
      </View>
      <View className={"mb-4"}>
        <Text className={"text-frenchGray mb-1"}>Team Members</Text>
        <Text className={"text-white"}>Onurcan, Nisha</Text>
      </View>
      <View className={"flex flex-row items-center gap-x-2"}>
        <Ionicons name={"ios-time"} size={24} color={Colors.bittersweet} />
        <Text className={"text-frenchGray"}>
          {startDate} - {endDate}
        </Text>
      </View>
      <View className={"absolute bottom-2 right-2"}>
        {completed ? (
          <Ionicons
            name={"ios-checkmark-circle"}
            size={24}
            color={Colors.pineGlade}
          />
        ) : (
          <Ionicons
            name={"ios-close-circle"}
            size={24}
            color={Colors.bittersweet}
          />
        )}
      </View>
    </View>
  );
};

export default TaskItem;
