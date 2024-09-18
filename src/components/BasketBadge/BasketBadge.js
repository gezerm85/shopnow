import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

const BasketBadge = ({ color }) => {
  const badge = useSelector((state) => state.data.basket);

  console.log(badge.length);

  return (
    <View style={styles.container}>
      {badge.length > 0 && (
        <Badge style={styles.badge} size={16}>
          {badge.length}
        </Badge>
      )}
      <Icon name="cart" size={30} color={color} />
    </View>
  );
};

export default BasketBadge;

const styles = StyleSheet.create({
  container: {},
  badge: {
    position: 'absolute',
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#cb6464",
    top: -10,
    right: -10,
  },
});
