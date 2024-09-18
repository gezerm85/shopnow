import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../redux/mainSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductCard = ({ item }) => {
  const nav = useNavigation();

  const dispatch = useDispatch();

  const handleOnPress = () => {
    nav.navigate("Detail", { item });
  };
  const { favorite } = useSelector((state) => state.data);

  const isFavorite = favorite && favorite.some((i) => i.id === item.id);

  

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <TouchableOpacity
        onPress={() => dispatch(setFavorite(item))}
        style={styles.icon}
      >
        {isFavorite ? (
          <Icon name="heart" size={24} color={"#c45f5f"} />
        ) : (
          <Icon name="heart" size={24} color={"#4a4a4a"} />
        )}
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <Image style={styles.images} source={{ uri: item.images[0] }} />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <StarRating
          rating={item.rating}
          onChange={() => {}}
          starSize={20}
          color="#FFD700"
          starStyle={styles.star}
        />
        <Text style={styles.price}>{item.price} $</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
    elevation: 1,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#e2dcdc",
    position: "relative",
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  star: {
    marginHorizontal: 0,
  },
  innerContainer: {
    width: "100%",
    height: "50%",
    paddingLeft: 8,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingBottom: 4,
  },
  bodyContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#000",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#cb6464",
  },
  icon: {
    position: "absolute",
    top: 16,
    right: 10,
    zIndex: 10,
  },
});
