import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const CalendarItem = ({ name, description, startDate, endDate, completed }) => {
    return (
        <View className={"flex flex-row items-center justify-between bg-secondary w-full rounded-lg h-[60px] py-2 px-4 mt-4 -mx-2"} style={{
            shadowColor: Colors.anakiwa,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        }}>
            <Text className={"text-white font-bold text-xl tracking-wider"}>{name}</Text>
            <View className={""}>
                {
                    completed ? (
                        <Ionicons name={"ios-checkmark-circle"} size={24} color={Colors.pineGlade} />
                    ) : (
                        <Ionicons name={"ios-close-circle"} size={24} color={Colors.bittersweet} />
                    )
                }
            </View>
        </View>
    );
};

export default CalendarItem;
