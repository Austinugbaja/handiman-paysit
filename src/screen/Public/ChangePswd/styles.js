import { StyleSheet } from "react-native";
import { COLOR, SIZE } from "../../../themes/typography";

export default StyleSheet.create({
  /* Header */
  navigationTransparent: {
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 0,
    elevation: 0,
  },
  navLeft: {
    flex: 1,
    paddingTop: 30,
  },
  bgImg: {
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
    // backgroundColor: COLOR.dark,
    opacity: 0.1,
  },
  bgLayout: {
    flex: 1,
    position: "absolute",
    zIndex: 3,
    width: "100%",
    height: "100%",
  },

  /* Content */

  passwordContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    padding: 30,
    zIndex: 3,
  },
  passwordTitle: {
    fontWeight: "bold",
    // fontFamily: FAMILY.bold,
    textAlign: "center",
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.7)",
    marginBottom: 20,
  },
  formRow: {
    // flex: 1,
    marginVertical: 10,
  },
  formText: {
    flex: 1,
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark,
  },
  formInput: {
    flex: 1,
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: COLOR.lightSmoke,
  },
  signInBtn: {
    backgroundColor: COLOR.greyDark,
    marginTop: 50,
  },
  signInBtnText: {
    textAlign: "center",
    // fontFamily: FAMILY.regular,
    color: COLOR.light,
    paddingVertical: 10,
  },
});
