import React from "react";
import {
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Container,
  View,
  Text,
  Icon,
  Heading,
  FormControl,
  Input,
  Button,
} from "native-base";
import PropTypes from "prop-types";
import { Formik, useFormik, getIn } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import styles from "./styles";
import theme from "../themes/styles";
import { COLOR, SIZE } from "../themes/typography";

import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { signupValidationSchema } from "../utils";


const image = {
  uri: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
};

const buildValidationSchema = (withPasswordConfirmation) =>
  Yup.object({
    fullName: Yup.string()
      .matches(/(\w.+\s).+/, "Enter at least 2 names")
      .required("Full name is required"),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
    // Optionally require password confirmation
    ...(withPasswordConfirmation && {
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null])
        .required("Confirm Password is required."),
    }),
  });

export const EmailandPasswordForm = ({
  navigation,
  buttonText = "SignUp",
  isLoading,
  onSubmit,
  withPasswordConfirmation = false,
}) => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        ...(withPasswordConfirmation && { passwordConfirmation: "" }),
      },
      validationSchema: buildValidationSchema(withPasswordConfirmation),
      onSubmit,
    });

  const onLoginScreen = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={theme.bgMain}>
      <ImageBackground
        source={image}
        resizeMode={"cover"}
        // imageStyle={"cover"}
        style={styles.bg}
      >
        <View style={styles.signUpContainer}>
          <View>
            <View>
              <Text style={styles.signUpTitle}>Millions of Job.Find yours</Text>
              <Text style={styles.signUpText}>Sign Up</Text>
            </View>

            <FormControl
              isInvalid={
                getIn(errors, "fullName") && getIn(touched, "fullName")
              }
            >
              <FormControl.Label style={styles.formText}>
                Name
              </FormControl.Label>
              <Input
                style={styles.formInput}
                autoCapitalize="none"
                keyboardAppearance="fullName"
                onBlur={handleBlur("fullName")}
                onChange={handleChange("fullName")}
                placeholder="johndoe"
                placeholderTextColor="rgba(255,255,255,1)"
                value={values.fullName}
              />
            </FormControl>
            <FormControl
              isRequired
              isInvalid={getIn(errors, "email") && getIn(touched, "email")}
            >
              <FormControl.Label style={styles.formText}>
                Email ID
              </FormControl.Label>
              <Input
                style={styles.formInput}
                autoCapitalize="none"
                keyboardType="email-address"
                onBlur={handleBlur("email")}
                onChange={handleChange("email")}
                placeholder="johndoe@gmail.com"
                placeholderTextColor="rgba(255,255,255,1)"
                value={values.email}
              />
            </FormControl>
            <FormControl
              isRequired
              isInvalid={
                getIn(errors, "password") && getIn(touched, "password")
              }
            >
              <FormControl.Label style={styles.formText}>
                Password
              </FormControl.Label>
              <Input
                style={styles.formInput}
                autoCapitalize="none"
                secureTextEntry
                autoCorrect={false}
                autoComplete="password"
                onBlur={handleBlur("password")}
                onChange={handleChange("password")}
                placeholder="********"
                placeholderTextColor="rgba(255,255,255,1)"
                value={values.password}
              />
            </FormControl>
            {withPasswordConfirmation && (
              <FormControl
                isRequired
                isInvalid={
                  getIn(errors, "passwordConfirmation") &&
                  getIn(touched, "passwordConfirmation")
                }
              >
                <FormControl.Label style={styles.formText}>
                  Retype Password
                </FormControl.Label>
                <Input
                  style={styles.formInput}
                  autoCapitalize="none"
                  secureTextEntry
                  autoCorrect={false}
                  autoComplete="password"
                  onBlur={handleBlur("passwordConfirmation")}
                  onChange={handleChange("passwordConfirmation")}
                  placeholder="********"
                  value={values.confirmPassword}
                  placeholderTextColor="rgba(255,255,255,1)"
                />
              </FormControl>
            )}
          </View>
          <View style={styles.signIn}>
            <Button
              style={styles.signUpBtn}
              onPress={handleSubmit}
              isLoading={isLoading}
            >
              {buttonText}
            </Button>
            {/* <TouchableOpacity
              style={styles.signUpBtn}
              onPress={handleSubmit}
              // isLoading={isLoading}
            >
              <Text style={styles.signUpBtnText}>SignUp</Text>
            </TouchableOpacity> */}
            <TouchableOpacity>
              <Text style={styles.accountText}>
                Already have an account?{" "}
                <Text onPress={onLoginScreen}>SignIn</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  /* Header */
  navigationTransparent: {
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 0,
    elevation: 0,
  },
  bg: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
  bgCover: {
    flex: 1,
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "100%",
    backgroundColor: COLOR.grey,
  },
  bgLayout: {
    flex: 1,
    position: "absolute",
    zIndex: 3,
    width: "100%",
    height: "100%",
  },
  navLeft: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
    borderBottomWidth: 0,
  },
  /* Content */

  signUpContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    padding: 30,
    zIndex: 3,
  },
  signUpTitle: {
    fontWeight: "bold",
    // fontFamily: FAMILY.bold,
    textAlign: "center",
    fontSize: SIZE.large,
    color: "black",
  },
  signUpText: {
    // fontFamily: FAMILY.regular,
    textAlign: "center",
    fontSize: SIZE.small,
    color: "black",
    marginBottom: 20,
    marginTop: 5,
  },
  formRow: {
    // flex: 1,
    marginBottom: 15,
  },
  formText: {
    // flex: 1,
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: "black",
  },
  formInput: {
    // flex: 1,
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  signIn: {
    marginTop: 10,
  },
  signUpBtn: {
    // flex: 1,
    backgroundColor: COLOR.greyDark,
  },
  signUpBtnText: {
    // flex: 1,
    textAlign: "center",
    paddingVertical: 10,
    // fontFamily: FAMILY.regular,
    color: COLOR.light,
  },
  accountText: {
    // flex: 1,
    // fontFamily: FAMILY.regular,
    textAlign: "center",
    marginVertical: 20,
    fontSize: SIZE.small,
    color: COLOR.light,
  },
});
