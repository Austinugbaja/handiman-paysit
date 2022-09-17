import React, { useState } from "react";
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
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { signupValidationSchema } from "../../utils";
import { auth } from "../../config";

import styles from "./styles";
import theme from "../../themes/styles";
import { FormErrorMessage } from "../../components/FormErrorMessage";

const image = {
  uri: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
};

const SignUp = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");

  const {
    passwordVisibility,
    handlePasswordVisibility,
    rightIcon,
    handleConfirmPasswordVisibility,
    confirmPasswordIcon,
    confirmPasswordVisibility,
  } = useTogglePasswordVisibility();

  const handleSignup = async (values) => {
    const { email, password } = values;

    await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser)
      .then(() => {
        alert("Verification email sent. Please check your mail box to verify.");
      })
      .catch((error) => {
        setErrorState.alert(error.message);
      });
  };

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
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={styles.signUpContainer}>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={signupValidationSchema}
              onSubmit={(values) => handleSignup(values)}
            >
              {({
                values,
                touched,
                errors,
                handleChange,
                handleSubmit,
                handleBlur,
              }) => (
                <>
                  <View>
                    <View style={{ marginTop: 40 }}>
                      <Text style={styles.signUpTitle}>
                        Millions of Job.Find yours
                      </Text>
                      <Text style={styles.signUpText}>Sign Up</Text>
                    </View>
                    <View style={styles.formRow}>
                      <Text style={styles.formText}>Name</Text>
                      <TextInput
                        style={styles.formInput}
                        name="fullname"
                        leftIconName="account"
                        placeholder="Enter fullname"
                        autoCapitalize="none"
                        keyboardType="full-name"
                        textContentType="fullName"
                        autoFocus={true}
                        value={values.fullName}
                        onChangeText={handleChange("fullName")}
                        onBlur={handleBlur("fullName")}
                      />
                    </View>
                    <FormErrorMessage
                      error={errors.fullName}
                      visible={touched.fullName}
                    />
                    <View>
                      <Text style={styles.formText}>Email ID</Text>
                      <TextInput
                        style={styles.formInput}
                        name="email"
                        leftIconName="email"
                        placeholder="johndoe@gmail.com"
                        placeholderTextColor="rgba(255,255,255,1)"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                      />
                    </View>
                    <FormErrorMessage
                      error={errors.email}
                      visible={touched.email}
                    />
                    <View>
                      <Text style={styles.formText}>Password</Text>
                      <TextInput
                        style={styles.formInput}
                        name="password"
                        leftIconName="key-variant"
                        placeholder="********"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={passwordVisibility}
                        textContentType="newPassword"
                        rightIcon={rightIcon}
                        handlePasswordVisibility={handlePasswordVisibility}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                      />
                    </View>
                    <FormErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />
                    <View>
                      <Text style={styles.formText}>Retype Password</Text>
                      <TextInput
                        style={styles.formInput}
                        name="confirmPassword"
                        leftIconName="key-variant"
                        placeholder="********"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={confirmPasswordVisibility}
                        textContentType="password"
                        rightIcon={confirmPasswordIcon}
                        handlePasswordVisibility={
                          handleConfirmPasswordVisibility
                        }
                        value={values.confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                      />
                    </View>
                    <FormErrorMessage
                      error={errors.confirmPassword}
                      visible={touched.confirmPassword}
                    />
                  </View>
                  {/* Display Screen Error Mesages */}
                  {errorState !== "" ? (
                    <FormErrorMessage error={errorState} visible={true} />
                  ) : null}
                  {/* Signup button */}
                  <View style={{ marginTop: 40 }}>
                    <Button
                      style={styles.signUpBtn}
                      onPress={handleSubmit}
                      // isLoading={isLoading}
                    >
                      <Text style={styles.signUpBtnText}>SignUp</Text>
                    </Button>
                    <TouchableOpacity>
                      <Text style={styles.accountText}>
                        Already have an account?{" "}
                        <Text onPress={onLoginScreen}>SignIn</Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignUp;
