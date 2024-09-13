import React from 'react'
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native'
import MainStack from '../MainStack/MainStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainStack />
    </NavigationContainer>
  )
}

export default Navigation