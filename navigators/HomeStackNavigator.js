import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTask from "../screens/createTask/createTask";
import Home from "../screens/home/Home";
import Colors from "../utils/Colors";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="HomeScreen" component={Home} options={{
                    headerShown: false,
                }} />
            </Stack.Group>
            <Stack.Screen
                name="CreateTask"
                component={CreateTask}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTitleStyle: {
                        color: Colors.primary,
                    },
                    headerBackTitleStyle: {
                        color: Colors.anakiwa,
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;