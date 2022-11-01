import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyGarden from "../screens/MyGarden";
import Profile from "../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Explore from "../screens/Explore";
import Diagnose from "../screens/Diagnose";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "MyGarden":
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;
            case "Explore":
              iconName = focused ? "ios-list" : "ios-list-outline";
              break;
            case "Search":
              iconName = focused ? "ios-search" : "ios-search-outline";
              break;
            case "Diagnose":
              iconName = focused ? "ios-search" : "ios-search-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopEndRadius: 30,
          position: "absolute",
          borderTopLeftRadius: 30,
        },
        tabBarActiveTintColor: "#45663d",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="MyGarden" component={MyGarden} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Diagnose" component={Diagnose} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
