import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import { Ionicons } from "@expo/vector-icons";
import CalendarStackNavigator from "./CalendarStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import AdminStackNavigator from "./AdminStackNavigator";
import Colors from "../utils/Colors";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/authSlice";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const user = useSelector(selectUser);

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Calendar") {
                        iconName = focused ? "calendar" : "calendar-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    } else if (route.name === "Admin") {
                        iconName = focused ? "settings" : "settings-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: Colors.frenchGray,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.secondary,
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Calendar" component={CalendarStackNavigator} />
            <Tab.Screen name="Profile" component={ProfileStackNavigator} />
            {user.role === "superAdmin" && <Tab.Screen name="Admin" component={AdminStackNavigator} />}
        </Tab.Navigator>
    );
}

export default TabNavigator;