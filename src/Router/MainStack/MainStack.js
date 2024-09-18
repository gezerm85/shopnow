import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import DetailScreen from "../../pages/DetailScreen/DetailScreen";
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
          title: 'Anasayfa',
        }}
        name="Product"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <LeftButton />,
        }}
        name="Detail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
