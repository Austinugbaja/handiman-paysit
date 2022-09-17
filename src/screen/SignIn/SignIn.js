import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { FormErrorMessage } from "../../components/FormErrorMessage";
import { auth } from "../../config";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import { loginValidationSchema } from "../../utils";

// import styles from "./styles";
import styles from "./styles";
import theme from "../../themes/styles";
import { COLOR, SIZE } from "../../themes/typography";
import { Icon, View, Text } from "native-base";

const image = {
  uri: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'",
};

const SignIn = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleLogin = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      setErrorState(error.message)
    );
  };

  const onForgotPswd = () => {
    navigation.navigate("ForgotPassword");
  };

  const onRegisterScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={theme.layoutFx}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        // imageStyle={"cover"}
        style={styles.bg}
      >
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={styles.bgCover} />
          <View style={styles.signInContainer}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginValidationSchema}
              onSubmit={(values) => handleLogin(values)}
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
                      <Text style={styles.signInTitle}>Sign In</Text>
                      <Text style={styles.signInText}>
                        Millions of Job. Find yours
                      </Text>
                    </View>
                    <View style={styles.formRow}>
                      <Text style={styles.formText}>Email</Text>
                      <TextInput
                        style={styles.formInput}
                        name="email"
                        leftIconName="email"
                        placeholder="Enter email"
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
                    <View style={styles.formRow}>
                      <Text style={styles.formText}>Password</Text>
                      <TextInput
                        style={styles.formInput}
                        name="password"
                        leftIconName="key-variant"
                        placeholder="********"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={passwordVisibility}
                        textContentType="password"
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
                    {/* Display Screen Error Mesages */}
                    {errorState !== "" ? (
                      <FormErrorMessage error={errorState} visible={true} />
                    ) : null}
                    {/* Login button */}
                    <TouchableOpacity onPress={onForgotPswd}>
                      <Text style={styles.forgotText}>
                        Forgot your password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.signInBtn}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.signInBtnText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onRegisterScreen}>
                      <Text style={styles.accountText}>
                        Dont have an account? SignUp
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.or}>OR</Text>
                  <View style={styles.smn}>
                    <TouchableOpacity
                      style={[styles.smnBtn, styles.smnFacebook]}
                    >
                      <Icon
                        name="facebook"
                        type="FontAwesome"
                        style={[theme.large, theme.dark]}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.smnBtn, styles.smnTwitter]}
                    >
                      <Icon
                        name="twitter"
                        type="FontAwesome"
                        style={[theme.large, theme.dark]}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.smnBtn, styles.smnGooglePlus]}
                    >
                      <Icon
                        name="google-plus"
                        type="FontAwesome"
                        style={[theme.large, theme.dark]}
                      />
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

export default SignIn;
