import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarScreen from "../screens/calendar/CalendarScreen";

const Stack = createNativeStackNavigator();

const CalendarStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{
                    headerShown: false,
                }} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default CalendarStackNavigator;