import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fontSize, spacing } from "../../utils";
import tailwind from "tailwind-rn";
const SearchBar = ({ onSubmitEditing }) => {
  return (
    <View style={[tailwind("flex-row rounded-md bg-gray-50")]}>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="search-sharp" size={24} color="#555" />
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Search here ..."
          {...{ onSubmitEditing }}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    height: spacing.xl,
    top: spacing.sm,
    zIndex: 5,
    flex: 1,
    justifyContent: "center",
    left: spacing.sm * 2,
  },
  inputContainer: {
    position: "relative",
    flex: 1,
    paddingVertical: spacing.sm,
    paddingLeft: spacing.md * 3,
    paddingRight: spacing.md,
  },
  input: {
    height: spacing.xl,
    fontSize: fontSize.md,
  },
});
