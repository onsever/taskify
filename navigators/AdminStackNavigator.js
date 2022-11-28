import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminScreen from "../screens/admin/AdminScreen";
import TaskListScreen from "../screens/admin/TaskListScreen";
import CreateTask from "../screens/createTask/createTask";
import Colors from "../utils/Colors";

const Stack = createNativeStackNavigator();

const AdminStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{
            headerShown: false,
          }}
        />
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
        <Stack.Screen
          name="taskList"
          component={TaskListScreen}
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AdminStackNavigator;
