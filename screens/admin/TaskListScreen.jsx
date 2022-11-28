import {
  View,
  Text,
  StatusBar,
  Pressable,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import SearchBar from "../../components/SearchBar";
import Row from "../../components/Row";
import Column from "../../components/Column";
import { Ionicons } from "@expo/vector-icons";
import TaskItem from "../../components/TaskItem";
import { useFetch } from "../../hooks/useFetch";
import { useDelete } from "../../hooks/useDelete";
import { useEffect } from "react";
import { RefreshControl } from "react-native-gesture-handler";

const TaskListScreen = ({ navigation, route }) => {
  const { fetch, result, loading } = useFetch();
  const deleteProject = useDelete();
  const project = route.params.project;

  const onAdd = () => {
    navigation.navigate("CreateTask", { project: project, onGoBack: refresh() });
  };

  useEffect(() => {
    if (deleteProject.loaded) {
      if (deleteProject.error) {
        Alert.alert("Error", deleteProject.error);
      }
      if (deleteProject.result) {
        route.params.onGoBack();
        navigation.goBack();
      }
    }
  }, [deleteProject.loaded, deleteProject.result, deleteProject.error]);

  const onEdit = () => {
    navigation.navigate("CreateProject", {
      project: project,
      onGoBack: () => refresh(),
    });
  };

  const onDelete = () => {
    Alert.alert(
      "Delete Project",
      "Are you sure you want to delete this project?",
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteProject.doDelete(`project/${project._id}`);
          },
        },
        {
          text: "Cancel",
        },
      ]
    );
  };

  const refresh = () => fetch(`project/${project._id}/task`);

  useEffect(() => {
    fetch(`project/${project._id}/task`);
  }, []);

  return (
    <SafeAreaView className={"w-screen h-screen bg-primary"}>
      <StatusBar barStyle="light-content" />
      <View className="flex items-center justify-center">
        <Column>
          <Row>
            <Text className="text-2xl">Project: {project.title}</Text>
          </Row>
          <Row>
            <Text className="text-1xl">{project.description}</Text>
          </Row>
          <Row>
            <Pressable
              className="flex items-center justify-center w-12 h-12 rounded-full bg-bittersweet pl-0.5"
              onPress={onEdit}
            >
              <Ionicons name="ios-pencil" size={24} color="white" />
            </Pressable>

            <Pressable
              className="flex items-center justify-center w-12 h-12 rounded-full bg-bittersweet pl-0.5"
              onPress={onDelete}
            >
              <Ionicons name="trash" size={24} color="white" />
            </Pressable>
          </Row>
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
            <Text className={"ptext-white text-2xl font-bold tracking-wide w-full"}>
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
                    onPress={() => {
                      navigation.navigate("CreateTask", { project: project, onGoBack: () => refresh(), task: item });
                    }}
                  />
                )}
                refreshControl={
                  <RefreshControl refreshing={loading} onRefresh={refresh} />
                }
              />
            )}
          </View>
        </Column>
      </View>
    </SafeAreaView>
  );
};

export default TaskListScreen;