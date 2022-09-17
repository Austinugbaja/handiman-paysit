import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";
import { passwordResetSchema } from "../../../utils";

import { auth } from "../../../config";
import { FormErrorMessage } from "../../../components/FormErrorMessage";

// import styles
import styles from "./styles";
import theme from "../../../themes/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const image = {
  uri: "https://cdn.pixabay.com/photo/2017/03/20/23/54/pink-2160666_960_720.jpg",
};

const ForgotPswd = ({ navigation }) => {
  const [errorState, setErrorState] = useState("");

  const handleSendPasswordResetEmail = (values) => {
    const { email } = values;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Success: Password Reset Email sent.");
        navigation.navigate("SignIn");
      })
      .catch((error) => setErrorState(error.message));
  };

  return (
    <View style={theme.layoutFx}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgImg}>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={styles.bgCover} />
          <View style={styles.passwordContainer}>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={passwordResetSchema}
              onSubmit={(values) => handleSendPasswordResetEmail(values)}
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
                    <Text style={styles.passwordTitle}>Reset Password</Text>
                    <View style={styles.formRow}>
                      <Text style={styles.formText}>Email</Text>
                      <TextInput
                        style={styles.formInput}
                        name="email"
                        leftIconName="email"
                        placeholder="Enter email"
                        placeholderTextColor="rgba(255,255,255,1)"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                      />
                    </View>
                    <FormErrorMessage
                      error={errors.email}
                      visible={touched.email}
                    />
                    {/* Display Screen Error Mesages */}
                    {errorState !== "" ? (
                      <FormErrorMessage error={errorState} visible={true} />
                    ) : null}
                    {/* Password Reset Send Email  button */}
                  </View>
                  <TouchableOpacity
                    style={styles.signInBtn}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.signInBtnText}>SignIn</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

export default ForgotPswd;
