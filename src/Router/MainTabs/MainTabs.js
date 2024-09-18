import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "../MainStack/MainStack";
import FavoriteScreen from "../../pages/FavoriteScreen/FavoriteScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BasketScreen from "../../pages/BasketScreen/BasketScreen";
import { View } from "react-native";
import { Badge } from "react-native-paper";
import BasketBadge from "../../components/BasketBadge/BasketBadge";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "#918989",
        tabBarActiveTintColor: "#cb6464",
        tabBarStyle: {
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          marginTop: -5,
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginBottom: -5,
        },
        headerStyle: {
          height: 96,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "semibold",
          },
          title: "Sepet",
          tabBarIcon: ({ color }) =>  <BasketBadge color={color}/> ,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorilerim",
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "semibold",
          },

          tabBarIcon: ({ color }) => (
            <Icon name="heart" size={30} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
