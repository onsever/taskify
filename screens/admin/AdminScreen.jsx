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
import { useEffect, useState } from "react";
import { RefreshControl } from "react-native-gesture-handler";

const AdminScreen = ({ navigation }) => {
  const { fetch, result, loading } = useFetch();
  const [refreshing, setRefreshing] = useState(false);

  const onAdd = () => {
    navigation.navigate("CreateProject", {
      onGoBack: () => refresh(),
    });
  };

  const refresh = () => {
    fetch("project");
  };

  useEffect(() => {
    fetch("project");
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
              Project List
            </Text>
          </View>
          <View className={"w-full"}>
            {loading || refreshing ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                style={{ width: "100%" }}
                data={result}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TaskItem
                    name={item.title}
                    description={item.description}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    completed={item.isComplete}
                    onPress={() =>
                      navigation.navigate("taskList", {
                        project: item,
                        onGoBack: () => refresh(),
                      })
                    }
                  />
                )}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={refresh} />
                }
              />
            )}
          </View>
        </Column>
      </View>
    </SafeAreaView>
  );
};

export default AdminScreen;
