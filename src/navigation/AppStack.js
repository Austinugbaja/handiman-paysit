import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Public/Home/Home";
import Chat from "../screen/Chat/Chat";
import Blog from "../screen/Public/Blog/Blog";
import Resume from "../screen/JobSeeker/Resume/Resume";
import ProfileDashboard from "../screen/JobSeeker/ProfileDashboard";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="Resume" component={Resume} />
      <Stack.Screen name="ProfileDashboard" component={ProfileDashboard} />
    </Stack.Navigator>
  );
};
