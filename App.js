import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator";
import TabNavigator from "./navigators/TabNavigator";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const [user, setUser] = useState("null");

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user ? <TabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </Provider>
  );
}
