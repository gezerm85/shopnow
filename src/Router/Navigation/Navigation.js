import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "../MainStack/MainStack";
import { useDispatch } from "react-redux";
import { fetchCategory, fetchData } from "../../redux/mainSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("https://dummyjson.com/products"));
    dispatch(fetchCategory('https://dummyjson.com/products/category-list'))
  }, [dispatch]);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
