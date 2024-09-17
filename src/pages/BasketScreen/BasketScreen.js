import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "../../components/BasketCard/BasketCard";

const BasketScreen = () => {
  const { basket, totalAmount } = useSelector((state) => state.data);

  const shortenedNumber = totalAmount && totalAmount.toFixed(2);

  return (
    <View style={styles.container}>
      {basket.length === 0 ? (
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>Sepetim Boş</Text>
        </View>
      ) : (
        <FlatList
          data={basket}
          renderItem={({ item }) => <BasketCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 16 }}
        />
      )}

      <View style={styles.bottomContainer}>
        <Text style={styles.totalAmount}>
          Toplam Tutar:
          <Text style={styles.amount}> {shortenedNumber}$</Text>
        </Text>
        <TouchableOpacity style={styles.btnBox}>
          <Text style={styles.btnText}>Ödemeyi Tamamla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  bodyContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#cb6464'
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
  },

  amount: {
    color: "#cb6464",
  },
});

export default BasketScreen;
