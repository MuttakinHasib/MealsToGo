import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import tailwind from "tailwind-rn";

const RestaurantsInfo = () => {
  return (
    <Pressable style={tailwind("p-5 border border-gray-100")}>
      <Image
        style={tailwind("h-44")}
        source={{
          uri:
            "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <View style={tailwind("mt-3")}>
        <Text>Brooke Lark</Text>
      </View>
    </Pressable>
  );
};

export default RestaurantsInfo;
