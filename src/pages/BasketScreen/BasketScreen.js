import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BasketCard from "../../components/BasketCard/BasketCard";
import SendToCart from "../../components/SendToCard/SendToCard";
import { allRemoveToBasket } from "../../redux/mainSlice";

const BasketScreen = () => {
  const { basket, totalAmount } = useSelector((state) => state.data);
  const shortenedNumber = totalAmount && totalAmount.toFixed(2);

  const dispatch = useDispatch();

  const animation = useRef(null);
  const [isVisible, setIsVisible] = useState(false); 

  

  const playAnimation =  () => {
    setIsVisible(true);
    animation.current?.reset();
    animation.current?.play();
    dispatch(allRemoveToBasket())
  };

  const handleAnimationEnd = () => {
    setIsVisible(false); 
  };



  return (
    <View style={styles.container}>
      {basket.length === 0 ? (
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Sepetim Boş</Text>
        </View>
      ) : (
        <View style={styles.flatContainer}>
          <FlatList
            data={basket}
            renderItem={({ item }) => <BasketCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.totalAmount}>
              Toplam Tutar:
              <Text style={styles.amount}> {shortenedNumber}$</Text>
            </Text>
            <TouchableOpacity style={styles.btnBox} onPress={playAnimation}>
              <Text style={styles.btnText}>Ödemeyi Tamamla</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {isVisible && (
        <View style={styles.modalContainer}>
          <SendToCart ref={animation} onAnimationFinish={handleAnimationEnd} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatContainer:{
    flex: 1,
  },
  btnBox: {
    backgroundColor: "#cb6464",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: 56,
    borderRadius: 25,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#cb6464",
  },
  btnText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  totalAmount: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  bottomContainer: {
    gap: 16,
    marginTop: 16,
  },
  amount: {
    color: "#cb6464",
  },
  modalContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff', 
  },
});

export default BasketScreen;