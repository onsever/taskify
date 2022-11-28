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

const CreateTask = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState();

  const project = route.params.project;

  const memberFetch = useFetch();
  const taskFetch = useFetch();

  useEffect(() => {
    memberFetch.fetch("user");
    taskFetch.fetch(`project/${project._id}/task`);
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    console.log(fDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView className={"bg-primary flex-1"}>
      <ScrollView className={"p-8"}>
        <View className={"mb-5"}>
          <Text className={"text-bold text-white text-3xl"}>Create</Text>
          <Text className={"text-bold text-white text-3xl"}>New Task</Text>
        </View>
        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-xl text-bold"}>
            Task Title
          </Text>
          <TextInput className={"h-10 border-b border-secondary mb-5"} />
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
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
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
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
        </View>

        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-bold text-xl"}>
            Descriptions
          </Text>
          <TextInput className={"text-white"}>This is a description.</TextInput>
        </View>

        <View className={"mb-5"}>
          <Text className={"text-white mb-5 text-bold text-xl"}>
            Assign Member
          </Text>
          <Picker
            selectedValue={selectedMember}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedMember(itemValue)
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
            selectedValue={selectedMember}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedMember(itemValue)
            }
          >
            {taskFetch.result &&
              taskFetch.result.map((x) => {
                return <Picker.Item label={`${x.title}`} value={x._id} />;
              })}
          </Picker>
        </View>

        <View className={"mt-[30%]"}>
          <Pressable
            className={
              "flex items-center p-4 rounded-full w-full mx-auto bg-bittersweet"
            }
          >
            <Text className={"text-white font-bold text-xl"}>Create Task</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTask;
