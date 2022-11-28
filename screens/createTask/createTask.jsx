import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { useFetch } from "../../hooks/useFetch";
import { usePost } from "../../hooks/usePost";
import { useUpdate } from "../../hooks/useUpdate";
import moment from "moment";

const CreateTask = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const editTask = route.params.task;

  const [eDate, setEDate] = useState(
    editTask ? moment(editTask.endDate, "DD/MM/YYYY").toDate() : new Date()
  );
  const [sDate, setSDate] = useState(
    editTask ? moment(editTask.startDate, "DD/MM/YYYY").toDate() : new Date()
  );

  const onChangeEDate = (event, selectedDate) => {
    setEDate(selectedDate);
    setTask({
      ...task,
      endDate: moment(selectedDate).format("DD/MM/YYYY"),
    });
  };

  const onChangeSDate = (event, selectedDate) => {
    setSDate(selectedDate);
    setTask({
      ...task,
      startDate: moment(selectedDate).format("DD/MM/YYYY"),
    });
  };
  const project = route.params.project;
  const projectId = project ? project._id : editTask.projectId;
  const memberFetch = useFetch();
  const taskFetch = useFetch();

  const [task, setTask] = useState({
    title: editTask ? editTask.title : null,
    description: editTask ? editTask.description : null,
    startDate: editTask ? editTask.startDate : null,
    endDate: editTask ? editTask.endDate : null,
    memberId: editTask ? editTask.memberId : null,
    preTask: editTask ? editTask.preTask : null,
    projectId: projectId,
  });
  const postTask = usePost();
  const updateTask = useUpdate();

  useEffect(() => {
    memberFetch.fetch("user");
    taskFetch.fetch(`project/${projectId}/task`);
  }, []);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  useEffect(() => {
    if (
      (postTask.result && postTask.loaded) ||
      (updateTask.result && updateTask.loaded)
    ) {
      if (route.params.onGoBack) route.params.onGoBack();
      navigation.goBack();
    }
  }, [postTask.result, postTask.loaded, updateTask.result, updateTask.loaded]);

  useEffect(() => {
    console.log("postTask.error", postTask.error);
  }, [postTask.error, updateTask.error]);

  return (
    <SafeAreaView className={"bg-primary flex-1"}>
      <ScrollView className={"p-8"}>
        <View className={"mb-5"}>
          <Text className={"text-bold text-white text-3xl"}>
            {!editTask ? "Create" : "Update"}
          </Text>
          <Text className={"text-bold text-white text-3xl"}>
            {!editTask ? "New " : ""}Task
          </Text>
        </View>
        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-xl text-bold"}>
            Task Title
          </Text>
          <TextInput
            value={task.title}
            onChangeText={(text) => setTask({ ...task, title: text })}
            className={"h-10 border-b border-secondary mb-5"}
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
            value={task.description}
            onChangeText={(text) => setTask({ ...task, description: text })}
            className={"text-white"}
          />
        </View>

        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-bold text-xl"}>
            Assign Member
          </Text>
          <Picker
            selectedValue={task.memberId}
            onValueChange={(itemValue, itemIndex) =>
              setTask({ ...task, memberId: itemValue })
            }
          >
            {memberFetch.result &&
              memberFetch.result.map((x) => {
                return (
                  <Picker.Item
                    label={`${x.firstName} ${x.lastName}`}
                    value={x._id}
                  />
                );
              })}
          </Picker>
        </View>

        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-bold text-xl"}>
            Select Pre Task
          </Text>
          <Picker
            selectedValue={task.preTask}
            onValueChange={(itemValue, itemIndex) =>
              setTask({ ...task, preTask: itemValue })
            }
          >
            <Picker.Item label={`None`} value={null} />
            {taskFetch.result &&
              taskFetch.result.map((x) => {
                return <Picker.Item label={`${x.title}`} value={x._id} />;
              })}
          </Picker>
        </View>

        <View className={"mt-[30%]"}>
          <Pressable
            className={
              "flex items-center p-4 rounded-full w-full mx-auto bg-bittersweet mb-7"
            }
            onPress={() => {
              editTask
                ? updateTask.update(`task/${editTask._id}`, task)
                : postTask.post("task", task);
            }}
          >
            <Text className={"text-white font-bold text-xl"}>
              {editTask ? "Update" : "Create"} Task
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTask;
