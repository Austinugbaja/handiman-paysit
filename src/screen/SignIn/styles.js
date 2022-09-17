import { COLOR, FAMILY, SIZE } from "../../themes/typography";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    paddingTop: 15,
    borderBottomWidth: 0,
  },

  /* Content */

  signInContainer: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    padding: 30,
    zIndex: 3,
  },
  signInTitle: {
    fontWeight: "bold",
    // fontFamily: FAMILY.bold,
    textAlign: "center",
    fontSize: SIZE.extraLarge,
    color: COLOR.light,
  },
  signInText: {
    // fontFamily: FAMILY.regular,
    textAlign: "center",
    fontSize: SIZE.medium,
    color: COLOR.default,
    marginBottom: 40,
    marginTop: 5,
  },
  formRow: {
    marginBottom: 10,
  },
  formText: {
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.default,
  },
  formInput: {
    flex: 1,
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    marginBottom: 15,
  },
  signInBtn: {
    width: "100%",
    backgroundColor: COLOR.darkLight,
    paddingVertical: 10,
    borderRadius: 3,
  },
  signInBtnText: {
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
    paddingVertical: 10,
    textAlign: "center",
  },
  accountText: {
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    textAlign: "center",
    marginVertical: 20,
  },
  forgotText: {
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    textAlign: "right",
    color: COLOR.light,
    marginBottom: 20,
  },
  or: {
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    textAlign: "center",
    marginVertical: 15,
  },
  smn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  smnBtn: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    marginHorizontal: 10,
  },
  smnFacebook: {
    backgroundColor: "#3a559f",
  },
  smnTwitter: {
    backgroundColor: "#4faaf0",
  },
  smnGooglePlus: {
    backgroundColor: "#dd4b39",
  },
});
