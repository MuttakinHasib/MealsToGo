import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import Navigation from "./src/components/Navigation";

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "SFP-regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFP-semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFP-medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFP-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "ubuntu-light": Ubuntu_300Light,
    "ubuntu-regular": Ubuntu_400Regular,
    "ubuntu-medium": Ubuntu_500Medium,
    "ubuntu-bold": Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={[tailwind("bg-white"), styles.container]}>
      <Navigation>
        <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={RestaurantScreen} />
        <Tab.Screen name="Settings" component={RestaurantScreen} />
      </Navigation>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
