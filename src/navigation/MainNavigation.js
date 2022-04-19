import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import AdminDashboard from "../screens/ItemRequests";
import Colors from "../constants/color";
import MyTabs from "./BottomNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="login screen">
      <Stack.Screen
        name="login screen"
        component={LoginScreen}
        options={({ navigation, route }) => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="admin dashboard"
        component={MyTabs}
        options={({ navigation, route }) => {
          return {
            headerTitle: "Admin Dashboard",
            headerStyle: {
              color: Colors.primary,
            },
            headerTintColor: Colors.primaryMain,
            headerShown: false,
            headerBackVisible: false,
            headerBackButtonMenuEnabled: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
