import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../redux/features/authSlice";
import { getData } from "../utils/asyncStorage";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigator from "./TabNavigator";

const Navigator = () => {
  const userLoggedIn = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const user = await getData("user");
      if (user)
        dispatch(login(user))
    }
    fetchData();

  }, [])

  return (
    <NavigationContainer>
      {userLoggedIn ? <TabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default Navigator;