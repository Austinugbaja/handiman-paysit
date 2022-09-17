import { COLOR, FAMILY, SIZE } from "../../themes/typography";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    // zIndex: 3,
    backgroundColor: "transparent",
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
