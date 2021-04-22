import React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";
import { colors, font } from "../../utils";

const body = () => ({
  fontFamily: font.medium,
  ...tailwind("text-base text-gray-600"),
});

const label = () => ({
  fontFamily: "ubuntu-medium",
  color: colors.darkBlue,
  opacity: 0.9,
  ...tailwind("text-xl"),
});

const caption = () => ({
  fontFamily: font.bold,
  opacity: 0.8,
  ...tailwind("text-3xl my-8"),
});

const error = () => ({
  fontFamily: font["s-body"],
  ...tailwind("text-base text-red-400"),
});

const variants = {
  body,
  label,
  caption,
  error,
};

const AppText = ({ variant, className, styles, children }) => {
  return (
    <Text style={[variants[variant](), tailwind(className), styles]}>
      {children}
    </Text>
  );
};

export default AppText;
