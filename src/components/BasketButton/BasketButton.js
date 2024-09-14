import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const BasketButton = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btnBox}
      onPress={() => nav.navigate("Basket")}
    >
      <Icon name="basket" size={30} color={"#000"} />
    </TouchableOpacity>
  );
};

export default BasketButton;

const styles = StyleSheet.create({
  btnBox: {
    paddingLeft: 16,
    paddingVertical: 16,
  },
});
