import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login/Login";
import Details from "./screens/details/Details";
import OnBoarding from "./screens/onboarding/OnBoarding";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="OnBoarding" component={OnBoarding} options={{
              headerShown: false,
          }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
