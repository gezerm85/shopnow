import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const LeftButton = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.btnBox} onPress={() => nav.goBack()}>
      <Icon name="arrow-left" size={30} color={"#000"} />
    </TouchableOpacity>
  );
};

export default LeftButton;

const styles = StyleSheet.create({
  btnBox: {
    paddingRight: 16,
    paddingVertical: 16,
  },
});
