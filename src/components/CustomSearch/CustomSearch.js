import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSerachText } from "../../redux/mainSlice";

const CustomSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSerachText(query));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    borderWidth: 0.1,
    borderColor: "#cdcbcb",
    elevation: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: 12,
  },
});
