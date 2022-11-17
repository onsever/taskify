import { createNativeStackNavigator} from "@react-navigation/native-stack";
import OnBoarding from "../screens/onboarding/OnBoarding";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Register" component={Register} options={{
                    headerShown: false,
                }} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default AuthStackNavigator;