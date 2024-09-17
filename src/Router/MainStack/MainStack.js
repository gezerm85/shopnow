import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import DetailScreen from "../../pages/DetailScreen/DetailScreen";
import BasketScreen from "../../pages/BasketScreen/BasketScreen";
import BasketButton from "../../components/BasketButton/BasketButton";
import LeftButton from "../../components/LeftButton/LeftButton";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle:{
          fontSize: 26,
          fontWeight: "semibold",
        }
      }}
    >
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          title: 'Ürünler',
          headerRight: () => <BasketButton />,
        }}
        name="Product"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerRight: () => <BasketButton />,
          headerLeft: () => <LeftButton />,
        }}
        name="Detail"
        component={DetailScreen}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          title: 'Sepetim',
          headerLeft: () => <LeftButton />,
        }}
        name="Basket"
        component={BasketScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
