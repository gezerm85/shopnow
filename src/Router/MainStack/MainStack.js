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
      }}
    >
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "semibold",
          },
          headerRight: () => <BasketButton />,
        }}
        name="Product"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "semibold",
          },
          headerRight: () => <BasketButton />,
          headerLeft: () => <LeftButton />,
        }}
        name="Detail"
        component={DetailScreen}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "semibold",
          },
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
