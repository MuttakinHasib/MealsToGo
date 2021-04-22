import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "home",
  Map: "enviromento",
  Settings: "setting",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <View style={styles.icon}>
        <AntDesign name={iconName} size={32} {...{ color }} />
      </View>
    ),
  };
};

const Navigation = ({ children }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurant"
        tabBarOptions={{
          activeTintColor: "#00133d",
          inactiveTintColor: "#bbb",
          showLabel: false,
          style: {
            backgroundColor: "#fff",
            borderTopColor: "#eee",
            height: 65,
          },
        }}
        {...{ screenOptions }}
      >
        {children}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
});
