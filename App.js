import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import MainNavigator from "./src/navigation/MainNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/store";
import Colors from "./src/constants/color";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.accent} style="dark" />
      <SafeAreaProvider>
        <View style={styles.container}>
          <Provider store={store}>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </Provider>
        </View>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
