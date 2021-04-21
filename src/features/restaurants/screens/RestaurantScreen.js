import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { SearchBar } from "../../../components";
import { spacing } from "../../../utils";
import RestaurantsInfo from "../components/RestaurantInfo";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar
          onSubmitEditing={({ nativeEvent }) => console.log(nativeEvent.text)}
        />
      </View>
      <View style={styles.list}>
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: spacing.md,
  },
  list: {
    flex: 1,
    padding: spacing.md,
  },
});
