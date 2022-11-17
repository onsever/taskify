import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="HomeScreen" component={Home} options={{
                    headerShown: false,
                }} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;