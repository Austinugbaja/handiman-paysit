import React from "react";
import { Alert } from "native-base";

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <Alert status="error">
      <Alert.Icon />
      <Alert.Title>{error.message}</Alert.Title>
    </Alert>
  );
};
