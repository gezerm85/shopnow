import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { decrementCount, incrementCount, removeToBasket } from "../../redux/mainSlice";
import { useNavigation } from "@react-navigation/native";

const BasketCard = ({ item }) => {
  const basketItem = useSelector((state) =>
    state.data.basket.find((basketItem) => basketItem.id === item.id)
  );

  const dispatch = useDispatch();

  const nav = useNavigation()

  const count = basketItem ? basketItem.count : 0;

  const totalPrice = basketItem ? basketItem.totalPrice.toFixed(2) : 0

  function handleOnPress() {
    nav.navigate("Detail", {item})
  }

  const handleIncrement = () => {
    dispatch(incrementCount({ id: item.id }));
  };

  const handleDecrement = () => {
    if(count !== 0){
        dispatch(decrementCount({ id: item.id }));
    }
  };

  const handleRemove = () => {
    dispatch(removeToBasket({ id: item.id }));
    
  };


  function handleAlert() {
    Alert.alert(`${item.title}`, "Ürünü sepetten silmek istediğinize emin misiniz",[
        {
            text: "Evet",
            onPress: handleRemove
            
        },
        {
            style: 'cancel',
            text: "iptal",
            
            
        }
    ] )
  }

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <View style={styles.bodyConrainer}>
        <Image style={styles.images} source={{ uri: basketItem && basketItem.images[0] }} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{totalPrice} $</Text>
          <View style={styles.countBox}>
            <TouchableOpacity
              style={styles.btnCount}
              onPress={handleDecrement}
            >
              <Icon name="minus" size={20} color={count === 1 ? "#a39e9e" : '#e48f8f'} />
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              style={styles.btnCount}
              onPress={handleIncrement}
            >
              <Icon name="plus" size={20} color={"#e48f8f"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.removeBox}>
            <TouchableOpacity onPress={handleAlert}>
            <Icon name="delete" size={30} color={"#e48f8f"} />
            </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BasketCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    paddingVertical: 16,
    elevation: 1
  },
  bodyConrainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  innerContainer: {
    gap: 10,
    alignItems: "flex-start",
    width: '60%',
  },
  countBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    elevation: 4,
    backgroundColor: "#f4f4f4",
    marginRight: 16,
  },
  btnCount: {
    padding: 4,
  },
  count: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 50,
    backgroundColor: "#e48f8f",
    elevation: 4,
    color: "#fff",
    fontWeight: "bold",
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
  removeBox:{
    height: '100%',
    marginRight: 8,
  },
});
