import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { fetchCategory, fetchData } from "../../redux/mainSlice";
import MainTabs from "../MainTabs/MainTabs";

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("https://dummyjson.com/products"));
    dispatch(fetchCategory('https://dummyjson.com/products/category-list'))
  }, [dispatch]);

  return (
    <NavigationContainer>
      <MainTabs/>
    </NavigationContainer>
  );
};

export default Navigation;
