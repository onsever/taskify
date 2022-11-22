import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminScreen from "../screens/admin/AdminScreen";
import CreateTask from "../screens/createTask/CreateTask";

const Stack = createNativeStackNavigator();

const AdminStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="AdminScreen" component={AdminScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="CreateTask" component={CreateTask} options={{
                    headerShown: false,
                }} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default AdminStackNavigator;