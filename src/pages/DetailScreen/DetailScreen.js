import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, setFavorite } from "../../redux/mainSlice";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StarRating from "react-native-star-rating-widget";

const DetailScreen = () => {
  const { item } = useRoute().params;

  const dispatch = useDispatch();

  const { basket, favorite } = useSelector((state) => state.data);


  const isFavorite = favorite.some((i)=>i.id === item.id)

  const handleOnPress = () => {
    dispatch(addToBasket(item));
  };

  return (
    <View style={styles.container}>
            <TouchableOpacity
        onPress={() => dispatch(setFavorite(item))}
        style={styles.icon}
      >
        {isFavorite ? (
          <Icon name="heart" size={40} color={"#c45f5f"} />
        ) : (
          <Icon name="heart" size={40} color={"#4a4a4a"} />
        )}
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <Image style={styles.images} source={{ uri: item.images[0] }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <StarRating
          rating={item.rating}
          onChange={() => {}}
          starSize={36}
          color="#FFD700"
          starStyle={styles.star}
        />
        <Text style={styles.price}>{item.price} $</Text>

      </View>
      <TouchableOpacity style={styles.btnBox} onPress={handleOnPress}>
        <Text style={styles.btnText}>Sepet Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    position: 'relative',
  },
  icon:{
    position: 'absolute',
    right: 24,
    top: 24,
    zIndex: 10
  },
  bodyContainer: {
    flex: 1,
    gap: 20,
  },
  images: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  desc: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#000",
  },
  price: {
    fontSize: 28,
    textAlign: "right",
    fontWeight: "bold",
    color: '#c45f5f'
  },
  btnBox: {
    backgroundColor: "#c45f5f",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    height: 56,
    borderRadius: 25,
    marginBottom: 24,
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
