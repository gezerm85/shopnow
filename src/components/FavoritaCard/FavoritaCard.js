import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StarRating from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";
import { removeToFavorite } from "../../redux/mainSlice";

const FavoritaCard = ({ item }) => {
    const nav = useNavigation()
  const dispatch = useDispatch();

  function handleOnPress() {
    nav.navigate('Detail', {item})
  }

  const handleRemove = () => {
   dispatch(removeToFavorite({ id: item.id }));
  };

  function handleAlert() {
    Alert.alert(
      `${item.title}`,
      "Ürünü sepetten silmek istediğinize emin misiniz",
      [
        {
          text: "Evet",
          onPress: handleRemove,
        },
        {
          style: "cancel",
          text: "iptal",
        },
      ]
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
        <Image style={styles.images} source={{ uri: item && item.images[0] }} />
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
        <View style={styles.removeBox}>
          <TouchableOpacity onPress={handleAlert}>
            <Icon name="delete" size={30} color={"#e48f8f"} />
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
};

export default FavoritaCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    elevation: 1,
    paddingVertical: 16,
  },
  innerContainer: {
    gap: 8,
    alignItems: "flex-start",
    width: "60%",
    height: '100%',
    justifyContent: 'space-between',
  },

  btnCount: {
    padding: 4,
  },
  star: {
    marginHorizontal: 0,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#c45f5f",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  images: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  removeBox: {
    height: "100%",
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
