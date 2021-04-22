import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import tailwind from "tailwind-rn";

import { AppText, SearchBar } from "../../../components";
import RestaurantsInfo from "../components/RestaurantInfo";

const RestaurantScreen = () => {
  return (
    <View style={tailwind("p-5 flex-1 bg-white")}>
      <SearchBar
        onSubmitEditing={({ nativeEvent }) => console.log(nativeEvent.text)}
      />
      <AppText variant="caption">Fast and{"\n"}Delicious Foods</AppText>
      <FlatList
        data={[1, 2]}
        keyExtractor={({ name }) => name}
        renderItem={() => <RestaurantsInfo />}
      />
    </View>
  );
};

export default RestaurantScreen;
