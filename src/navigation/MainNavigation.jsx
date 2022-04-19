import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import AdminDashboard from "../screens/ItemRequests";
import Colors from "../constants/color";
import MyTabs from "./BottomNavigator";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/slices/userSlice";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
            headerShown: true,
            headerBackVisible: false,
            headerBackButtonMenuEnabled: false,
            headerRight: () => {
              return (
                <Button
                  title="Log Out"
                  onPress={() => {
                    dispatch(logoutUser());
                    navigation.navigate("login screen");
                  }}
                />
              );
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
