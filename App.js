import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import OnBoarding from "./screens/onboarding/OnBoarding";
import Register from "./screens/register/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          <Stack.Screen name={"Home"} component={Home} options={{
              headerShown: false,
          }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
