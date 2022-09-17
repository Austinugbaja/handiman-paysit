import { ImageBackground, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

// import styles from "./styles";
import theme from "../themes/styles";
import { COLOR, SIZE } from "../themes/typography";
import { Icon, View, Text } from "native-base";

const image = {
  uri: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'",
};

export const LoginAndEmailPasswordForm = ({ navigation }) => {
  const onRegisterScreen = () => {
    navigation.navigate("PublicSignUp");
  }
  return (
    <View style={theme.layoutFx}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        // imageStyle={"cover"}
        style={styles.bg}
      >
        <View style={styles.bgCover} />
        <View style={styles.signInContainer}>
          <View>
            <View>
              <Text style={styles.signInTitle}>Sign In</Text>
              <Text style={styles.signInText}>Millions of Job. Find yours</Text>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Email</Text>
              <TextInput
                style={styles.formInput}
                placeholder="johndoe@gmail.com"
                placeholderTextColor="rgba(255,255,255,1)"
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Password</Text>
              <TextInput
                style={styles.formInput}
                placeholder="********"
                placeholderTextColor="rgba(255,255,255,1)"
              />
            </View>
            <TouchableOpacity
            // onPress={() => {
            //   navigate("PublicForgotPswd");
            // }}
            >
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signInBtn}
              // onPress={() => {
              //   navigate("PublicHome");
              // }}
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
            <TouchableOpacity style={[styles.smnBtn, styles.smnFacebook]}>
              <Icon
                name="facebook"
                type="FontAwesome"
                style={[theme.large, theme.dark]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.smnBtn, styles.smnTwitter]}>
              <Icon
                name="twitter"
                type="FontAwesome"
                style={[theme.large, theme.dark]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.smnBtn, styles.smnGooglePlus]}>
              <Icon
                name="google-plus"
                type="FontAwesome"
                style={[theme.large, theme.dark]}
              />
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