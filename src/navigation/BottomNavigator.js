import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemRequests from "../screens/ItemRequests";
import OrderRequests from "../screens/OrderRequests";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { Button, Platform, TouchableOpacity } from "react-native";
import Colors from "../constants/color";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Request"
        component={ItemRequests}
        options={{
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: "black",
          tabBarLabel: "Item Requests",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <Feather name="package" size={24} color={focused ? Colors.primaryMain : "black"} />;
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderRequests}
        options={{
          tabBarLabel: "Item Requests",
          tabBarIcon: ({ focused }) => {
            return <Feather name="package" size={24} color={focused ? Colors.primaryMain : "black"} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: "black",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
