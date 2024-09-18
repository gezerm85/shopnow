import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

const Category = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#e2dcdc",
    backgroundColor: "#fff",
    elevation: 1,
  },
});
