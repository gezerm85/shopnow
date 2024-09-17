import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/mainSlice";

const DetailScreen = () => {
  const { item } = useRoute().params;

  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state.data);

  const handleOnPress = () => {
    dispatch(addToBasket(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Image style={styles.images} source={{ uri: item.images[0] }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
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
    paddingHorizontal: 16
  },
  bodyContainer: {
    flex: 1,
    gap: 16,
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
    backgroundColor: "#cb6464",
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
