import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import loading from "../../assets/images/lottie/loading.json";

const Loading = () => {
  return <LottieView style={styles.lottie} autoPlay loop source={loading} />;
};

export default Loading;

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
    height: "100%",
  },
});
