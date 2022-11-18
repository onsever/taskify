import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminScreen from "../screens/admin/AdminScreen";
import CreateTask from "../screens/createTask/createTask";

const Stack = createNativeStackNavigator();

const AdminStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="AdminScreen" component={AdminScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="CreateTask" component={CreateTask} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default AdminStackNavigator;