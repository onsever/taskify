import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { usePost } from "../../hooks/usePost";

const CreateProject = ({ navigation, route }) => {
  const [eDate, setEDate] = useState(new Date());
  const [sDate, setSDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [project, setProject] = useState({
    title: null,
    description: null,
    startDate: null,
    endDate: null,
  });
  const { result, loading, loaded, post, error } = usePost();

  const onChangeEDate = (event, selectedDate) => {
    setEDate(selectedDate);
    setProject({
      ...project,
      endDate: moment(selectedDate).format("DD/MM/YYYY"),
    });
  };

  const onChangeSDate = (event, selectedDate) => {
    setSDate(selectedDate);
    setProject({
      ...project,
      startDate: moment(selectedDate).format("DD/MM/YYYY"),
    });
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  useEffect(() => {
    if (result && loaded) {
      route.params.onGoBack();
      navigation.goBack();
    }
  }, [result, loaded]);

  return (
    <SafeAreaView className={"bg-primary flex-1"}>
      <View className={"p-8"}>
        <View className={"mb-5"}>
          <Text className={"text-bold text-white text-3xl"}>Create</Text>
          <Text className={"text-bold text-white text-3xl"}>New Project</Text>
        </View>
        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-xl text-bold"}>
            Project Title
          </Text>
          <TextInput
            className={"h-10 border-b border-secondary mb-5"}
            value={project.title}
            onChangeText={(text) => setProject({ ...project, title: text })}
          />
        </View>
        <View className={"flex flex-row justify-between mb-5"}>
          <View
            className={
              "mb-5 flex flex-row bg-secondary p-5 rounded-lg items-center mr-3"
            }
          >
            <View className={"mr-5 "}>
              <Ionicons name="calendar" size={24} color={Colors.bittersweet} />
            </View>
            <View>
              <Text className={"text-white mb-2"}>Start Date</Text>
              <View
                className={
                  "bg-bittersweet mt-2 text-white p-3 flex items-center justify-center mb-5"
                }
              >
                <Pressable onPress={() => showMode("date")}>
                  <Text className={"text-white"}>Pick a Date</Text>
                </Pressable>
              </View>

              {show && (
                <DateTimePicker
                  style={{ color: "white" }}
                  testID="dateTimePicker"
                  value={sDate}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeSDate}
                />
              )}
            </View>
          </View>

          <View
            className={
              "mb-5 flex flex-row bg-secondary p-5 rounded-lg items-center"
            }
          >
            <View className={"mr-5 "}>
              <Ionicons name="calendar" size={24} color={Colors.bittersweet} />
            </View>
            <View>
              <Text className={"text-white mb-2"}>End Date</Text>
              <View
                className={
                  "bg-bittersweet mt-2 text-white p-3 flex items-center justify-center mb-5"
                }
              >
                <Pressable onPress={() => showMode("date")}>
                  <Text className={"text-white"}>Pick a Date</Text>
                </Pressable>
              </View>

              {show && (
                <DateTimePicker
                  style={{ color: "white" }}
                  testID="datePicker"
                  value={eDate}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeEDate}
                />
              )}
            </View>
          </View>
        </View>

        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-bold text-xl"}>
            Descriptions
          </Text>
          <TextInput
            className={"text-white"}
            value={project.description}
            onChangeText={(text) =>
              setProject({ ...project, description: text })
            }
          ></TextInput>
        </View>

        <View className={"mt-[30%]"}>
          <Pressable
            className={
              "flex items-center p-4 rounded-full w-full mx-auto bg-bittersweet flex-row justify-center"
            }
            onPress={() => {
              // console.log("project", project);
              post("project", project);
            }}
          >
            {loading && <ActivityIndicator color={"white"} />}
            <Text className={"text-white font-bold text-xl pl-2"}>
              Create Project
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateProject;
