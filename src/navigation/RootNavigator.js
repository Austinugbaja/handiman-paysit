import React, { useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { AuthenticatedUserContext } from "../providers/AuthenticatedUserProvider";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { auth } from "../config";
import { NativeBaseProvider } from "native-base";

export const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      auth,
      (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuthStateChanged;
  }, [user]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
