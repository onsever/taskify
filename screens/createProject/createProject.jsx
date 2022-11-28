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
import { useUpdate } from "../../hooks/useUpdate";

const CreateProject = ({ navigation, route }) => {
  const editProject = route.params.project;

  const [eDate, setEDate] = useState(
    editProject
      ? moment(editProject.endDate, "DD/MM/YYYY").toDate()
      : new Date()
  );
  const [sDate, setSDate] = useState(
    editProject
      ? moment(editProject.startDate, "DD/MM/YYYY").toDate()
      : new Date()
  );
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(editProject ? true : false);
  const [project, setProject] = useState({
    title: editProject ? editProject.title : null,
    description: editProject ? editProject.description : null,
    startDate: editProject ? editProject.startDate : null,
    endDate: editProject ? editProject.endDate : null,
  });
  const postProject = usePost();
  const updateProject = useUpdate();

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
    if (
      (postProject.result && postProject.loaded) ||
      (updateProject.result && updateProject.loaded)
    ) {
      route.params.onGoBack();
      navigation.goBack();
    }
  }, [
    postProject.result,
    postProject.loaded,
    updateProject.result,
    updateProject.loaded,
  ]);

  return (
    <SafeAreaView className={"bg-primary flex-1"}>
      <View className={"p-8"}>
        <View className={"mb-5"}>
          <Text className={"text-bold text-white text-3xl"}>
            {editProject ? "Edit" : "Create"}
          </Text>
          <Text className={"text-bold text-white text-3xl"}>
            {!editProject && "New "}Project
          </Text>
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

              editProject
                ? updateProject.update(`project/${editProject._id}`, project)
                : postProject.post("project", project);
            }}
          >
            {(postProject.loading || updateProject.loading) && (
              <ActivityIndicator color={"white"} />
            )}
            <Text className={"text-white font-bold text-xl pl-2"}>
              {editProject ? "Update" : "Add"} Project
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateProject;
