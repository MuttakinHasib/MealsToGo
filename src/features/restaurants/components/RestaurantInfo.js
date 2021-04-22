import React from "react";
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";
import tailwind from "tailwind-rn";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../utils";
import { AppText } from "../../../components";

const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Brooke Lark",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;
  return (
    <View style={tailwind("relative rounded-lg mb-5 flex-col bg-gray-50")}>
      {isClosedTemporarily && (
        <View style={tailwind("absolute z-10 bg-red-500 px-4 py-2")}>
          <Text style={tailwind("text-white font-bold text-lg")}>Closed</Text>
        </View>
      )}
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#eee")}
        style={tailwind("overflow-hidden rounded-md")}
      >
        <View>
          <View>
            <Image
              style={tailwind("h-36 rounded-t-lg")}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
            />
          </View>
          <View style={tailwind("px-5 py-3")}>
            <View style={tailwind("flex-row items-center justify-between")}>
              <View>
                <AppText variant="label">{name}</AppText>
                <View style={tailwind("flex-row items-center")}>
                  <AntDesign name="staro" size={20} color="#f56" />
                  <Text
                    style={[
                      tailwind("mx-2 text-base text-gray-600"),
                      styles.font,
                    ]}
                  >
                    {rating}
                  </Text>
                  <AppText variant="body">{address}</AppText>
                </View>
              </View>
              <View>
                <AntDesign name="heart" size={24} color="#f36" />
              </View>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default RestaurantsInfo;

const styles = StyleSheet.create({
  text: {
    fontFamily: "SFP-medium",
    color: colors.darkBlue,
    opacity: 0.9,
  },
  font: {
    fontFamily: "SFP-semibold",
  },
});
