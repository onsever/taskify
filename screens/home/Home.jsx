import { View, Text, StatusBar, Pressable, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Agenda } from "react-native-calendars/src/index";
import { SearchBar } from "react-native-elements";
import Colors from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "../../components/ActionButton";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className={"w-screen h-screen bg-primary p-8"}>
      <StatusBar barStyle="light-content" />

      <View className="flex items-center justify-center">
        <Text className="text-white text-2xl font-bold">Home Page</Text>
      </View>
      <View className={"flex flex-row items-center w-full mt-5 mb-5"}>
        <SearchBar
          inputContainerStyle={{
            backgroundColor: Colors.secondary,
            borderRadius: "50%",
          }}
          containerStyle={{
            borderWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            backgroundColor: Colors.primary,
            width: "80%",
          }}
        />
        <Pressable className={"bg-bittersweet rounded-full p-3 ml-3"}>
          <Ionicons
            name="md-filter"
            size={24}
            color={"white"}
            backgroundColor={Colors.bittersweet}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View>
          <Text className={"fw-bold text-white text-2xl w-screen"}>
            Projects
          </Text>
        </View>
        <ScrollView horizontal>
          <View className={"flex flex-row items-center mt-5 mb-5"}>
            <View className={"p-5 bg-secondary rounded-lg mr-2 ml-2"}>
              <Text className={"fw-bold text-white text-xl mb-3"}>
                Project 1
              </Text>
              <Text className={"text-white text-l"}>10 Tasks</Text>
            </View>
            <View className={"p-5 bg-secondary rounded-lg mr-2 ml-2"}>
              <Text className={"fw-bold text-white text-xl mb-3"}>
                Project 2
              </Text>
              <Text className={"text-white text-l"}>5 Tasks</Text>
            </View>
            <View className={"p-5 bg-secondary rounded-lg mr-2 ml-2"}>
              <Text className={"fw-bold text-white text-xl mb-3"}>
                Project 1
              </Text>
              <Text className={"text-white text-l"}>10 Tasks</Text>
            </View>
            <View className={"p-5 bg-secondary rounded-lg mr-2 ml-2"}>
              <Text className={"fw-bold text-white text-xl mb-3"}>
                Project 2
              </Text>
              <Text className={"text-white text-l"}>5 Tasks</Text>
            </View>
          </View>
        </ScrollView>
        <View className={"mb-40"}>
          <View className={"flex flex-row items-center justify-between mt-10"}>
            <Text className={"fw-bold text-white text-2xl"}>Ongoing Tasks</Text>
            <Pressable>
              <Text className={"text-bittersweet "}>See All</Text>
            </Pressable>
          </View>

          <View className={"flex items-center justify-center mt-5"}>
            <View className={"p-5 bg-secondary rounded-lg w-full m-5"}>
              <View
                className={"flex flex-row justify-between items-center mb-3"}
              >
                <Text className={"fw-bold text-white text-xl "}>Project 1</Text>
                <View className={"bg-anakiwa rounded-full"}>
                  <Text className={"text-white p-3 "}>6d</Text>
                </View>
              </View>
              <Text className={"text-white text-l"}>Team Members</Text>
              <View className={"flex flex-row"}>
                <View className={"mt-4 mr-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://www.nicepng.com/png/detail/388-3889577_girl-vector-3-an-images-hub-girl-vector.png",
                    }}
                  />
                </View>
                <View className={"mt-4 mr-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://thumbs.dreamstime.com/b/beautiful-asian-woman-smile-vector-illustration-beautiful-woman-specs-wspecs-wispecs-witspecs-withspecs-vector-illustration-134357609.jpg",
                    }}
                  />
                </View>
                <View className={"mt-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
                    }}
                  />
                </View>
              </View>
              <View className={"mt-5 flex flex-row items-center"}>
                <Ionicons name="time" size={26} color={Colors.bittersweet} />
                <Text className={"text-white ml-5 text-md"}>
                  2:30 PM - 6: 00 PM
                </Text>
              </View>
            </View>
            <View className={"p-5 bg-secondary rounded-lg w-full m-5"}>
              <View
                className={"flex flex-row justify-between items-center mb-3"}
              >
                <Text className={"fw-bold text-white text-xl "}>Project 2</Text>
                <View className={"bg-anakiwa rounded-full"}>
                  <Text className={"text-white p-3 "}>6d</Text>
                </View>
              </View>
              <Text className={"text-white text-l"}>Team Members</Text>
              <View className={"flex flex-row"}>
                <View className={"mt-4 mr-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://www.nicepng.com/png/detail/388-3889577_girl-vector-3-an-images-hub-girl-vector.png",
                    }}
                  />
                </View>
                <View className={"mt-4 mr-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://thumbs.dreamstime.com/b/beautiful-asian-woman-smile-vector-illustration-beautiful-woman-specs-wspecs-wispecs-witspecs-withspecs-vector-illustration-134357609.jpg",
                    }}
                  />
                </View>
                <View className={"mt-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
                    }}
                  />
                </View>
              </View>
              <View className={"mt-5 flex flex-row items-center"}>
                <Ionicons name="time" size={26} color={Colors.bittersweet} />
                <Text className={"text-white ml-5 text-md"}>
                  2:30 PM - 6: 00 PM
                </Text>
              </View>
            </View>
            <View className={"p-5 bg-secondary rounded-lg w-full m-5"}>
              <View
                className={"flex flex-row justify-between items-center mb-3"}
              >
                <Text className={"fw-bold text-white text-xl "}>Project 3</Text>
                <View className={"bg-anakiwa rounded-full"}>
                  <Text className={"text-white p-3 "}>6d</Text>
                </View>
              </View>
              <Text className={"text-white text-l"}>Team Members</Text>
              <View className={"flex flex-row"}>
                <View className={"mt-4 mr-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://www.nicepng.com/png/detail/388-3889577_girl-vector-3-an-images-hub-girl-vector.png",
                    }}
                  />
                </View>
                <View className={"mt-4 mr-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://thumbs.dreamstime.com/b/beautiful-asian-woman-smile-vector-illustration-beautiful-woman-specs-wspecs-wispecs-witspecs-withspecs-vector-illustration-134357609.jpg",
                    }}
                  />
                </View>
                <View className={"mt-4"}>
                  <Image
                    className={"w-10 h-10 rounded-full"}
                    source={{
                      uri: "https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
                    }}
                  />
                </View>
              </View>
              <View className={"mt-5 flex flex-row items-center"}>
                <Ionicons name="time" size={26} color={Colors.bittersweet} />
                <Text className={"text-white ml-5 text-md"}>
                  2:30 PM - 6: 00 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
