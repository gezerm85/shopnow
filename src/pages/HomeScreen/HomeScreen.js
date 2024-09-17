import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import Category from "../../components/Category/Category";
import CustomSearch from "../../components/CustomSearch/CustomSearch";
import { setSelectedCategory } from "../../redux/mainSlice";

const HomeScreen = () => {
  const { product, category, selectedCategory, searchText } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();

  const filteredByCategory =
    selectedCategory === "All"
      ? product
      : product.filter((item) => item.category === selectedCategory);

  const searchFilteredProducts = filteredByCategory.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Üst Kısım */}

      <View style={styles.searchContainer}>
        <CustomSearch />
      </View>

      {/* Alt Kısım */}
      <View style={styles.bottomContainer}>
        <View style={styles.horizontalListContainer}>
          <TouchableOpacity
            style={styles.btnBox}
            onPress={() => dispatch(setSelectedCategory("All"))}
          >
            <Text>All</Text>
          </TouchableOpacity>
          <FlatList
            data={category}
            renderItem={({ item }) => (
              <Category
                item={item}
                onPress={() => dispatch(setSelectedCategory(item))}
              />
            )}
            keyExtractor={(index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>
        {searchFilteredProducts && searchFilteredProducts.length === 0 ? (
          <View style={styles.listbox}>
            <Text style={styles.listTitle}>Ürün Bulunmamaktadır</Text>
          </View>
        ) : (
          <View style={styles.flatListContainer}>
            <FlatList
              data={searchFilteredProducts}
              renderItem={({ item }) => <ProductCard item={item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={styles.gridList}
              contentContainerStyle={styles.contentList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
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
    paddingHorizontal: 16,
  },
  bottomContainer: {
    flex: 7,
    gap: 16,
  },
  horizontalListContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  horizontalList: {
    alignItems: "flex-end",
    gap: 8,
    marginLeft: 8,
  },
  gridList: {
    flex: 1,
    gap: 16,
    alignSelf: "flex-start",
  },
  contentList: {
    gap: 16,
  },
  btnBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#e2dcdc",
    backgroundColor: "#fff",
    elevation: 1,
    marginLeft: 16,
  },
  listbox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "semibold",
  },
  flatListContainer:{
    flex: 1,
    paddingHorizontal: 16,
  }
});
