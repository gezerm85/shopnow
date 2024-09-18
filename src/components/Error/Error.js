import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import error from "../../assets/images/lottie/error.json";

const Error = () => {
  return <LottieView style={styles.lottie} autoPlay loop source={error} />;
};

export default Error;

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
    height: "100%",
  },
});
