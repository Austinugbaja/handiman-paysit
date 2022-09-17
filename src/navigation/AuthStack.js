import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screen/SignUp/SignUp";
import SignIn from "../screen/SignIn/SignIn";
import ForgotPswd from "../screen/Public/ChangePswd/ForgotPswd";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPswd} />
    </Stack.Navigator>
  );
};
