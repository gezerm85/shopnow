import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import DetailScreen from "../../pages/DetailScreen/DetailScreen";
import BasketScreen from "../../pages/BasketScreen/BasketScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Product" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Basket" component={BasketScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
