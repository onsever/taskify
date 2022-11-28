import {
  View,
  Text,
  StatusBar,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import SearchBar from "../../components/SearchBar";
import Row from "../../components/Row";
import Column from "../../components/Column";
import { Ionicons } from "@expo/vector-icons";
import TaskItem from "../../components/TaskItem";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";

const TaskListScreen = ({ navigation }) => {
  const { fetch, result, loading } = useFetch();

  const onAdd = () => {
    // console.log("Add button pressed");
    navigation.navigate("CreateTask");
  };

  useEffect(() => {
    fetch("task");
  }, []);

  return (
    <SafeAreaView className={"w-screen h-screen bg-primary"}>
      <StatusBar barStyle="light-content" />
      <View className="flex items-center justify-center">
        <Column>
          <Row styles={"my-2"}>
            <SearchBar />
            <Pressable
              className="flex items-center justify-center w-12 h-12 rounded-full bg-bittersweet pl-0.5"
              onPress={onAdd}
            >
              <Ionicons name="add" size={24} color="white" />
            </Pressable>
          </Row>
          <View className={"mb-4 w-full"}>
            <Text
              className={"ptext-white text-2xl font-bold tracking-wide  w-full"}
            >
              Task List
            </Text>
          </View>
          <View className={"w-full"}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                style={{ width: "100%" }}
                data={result}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TaskItem
                    name={item.title}
                    description={item.name}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    completed={item.isComplete}
                    onPress={() => navigation.navigate("taskList")}
                  />
                )}
              />
            )}
          </View>
        </Column>
      </View>
    </SafeAreaView>
  );
};

export default TaskListScreen;
