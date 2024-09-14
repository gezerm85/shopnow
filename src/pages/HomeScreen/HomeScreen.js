import { FlatList, View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import Category from "../../components/Category/Category";
import CustomSearch from "../../components/CustomSearch/CustomSearch";

const HomeScreen = () => {
  const { product, category } = useSelector((state) => state.data);

  return (
    <View style={styles.container}>
      {/* Üst Kısım */}

      <View style={styles.searchContainer}>
        <CustomSearch />
      </View>

      {/* Alt Kısım */}
      <View style={styles.bottomContainer}>
        <View style={styles.horizontalListContainer}>
          <FlatList
            data={category}
            renderItem={({ item }) => <Category item={item} />}
            keyExtractor={(index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>
        <FlatList
          data={product.products}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.gridList}
          contentContainerStyle={styles.contentList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  searchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 7,
    gap: 16,
  },
  horizontalListContainer: {
    alignItems: "center",
  },
  horizontalList: {
    alignItems: "flex-end",
    gap: 8,
    marginLeft: 16,
  },
  gridList: {
    flex: 1,
    gap: 16,
    alignSelf: "center",
  },
  contentList: {
    gap: 16,
  },
});
