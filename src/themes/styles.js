import { COLOR, FAMILY, SIZE } from "./typography";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* Layout */

  layoutDf: {
    flexGrow: 1,
  },
  layoutFx: {
    flex: 1,
    justifyContent: "center",
  },
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: "#f7f7f7",
  },
  // *** Header *** //
  navigation: {
    width: "100%",
    backgroundColor: COLOR.light,
    elevation: 0,
    borderBottomWidth: 0,
  },
  navigationTransparent: {
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 0,
    elevation: 0,
  },

  /* Header */

  bgMain: {
    flex: 1,
    position: "relative",
  },

  nav: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: -10,
    backgroundColor: COLOR.light,
    borderColor: "red",
    borrderWidth: 1,
  },
  navTransparent: {
    flex: 1,
    flexDirection: "row",
    marginLeft: -15,
    marginRight: -15,
    backgroundColor: "transparent",
  },
  navLeft: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  navMiddle: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  navRight: {
    flex: 1.5,
    alignItems: "flex-end",
  },
  navigationRight: {
    flex: 3.5,
    alignItems: "center",
    flexDirection: "row",
  },
  navRightIcon: {
    padding: 15,
  },
  navMiddleText: {
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
  },

  /* Colors */
  dark: {
    color: COLOR.dark,
  },
  light: {
    color: COLOR.light,
  },
  grey: {
    color: COLOR.grey,
  },
  greyDark: {
    color: "black",
  },
  greyLight: {
    color: COLOR.greyLight,
  },
  smokeDark: {
    color: COLOR.smokeDark,
  },
  darkLight: {
    color: COLOR.darkLight,
  },
  smoke: {
    color: COLOR.smoke,
  },
  smokeGrey: {
    color: COLOR.smokeGrey,
  },
  smokeLight: {
    color: COLOR.smokeLight,
  },
  darkGrey: {
    color: COLOR.darkGrey,
  },
  lightGrey: {
    color: COLOR.lightGrey,
  },

  bgDark: {
    backgroundColor: COLOR.dark,
  },
  bgLight: {
    backgroundColor: COLOR.light,
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny,
  },
  extraTiny: {
    fontSize: SIZE.extraTiny,
  },
  small: {
    fontSize: SIZE.small,
  },
  medium: {
    fontSize: SIZE.medium,
  },
  compact: {
    fontSize: SIZE.compact,
  },
  large: {
    fontSize: SIZE.large,
  },
  huge: {
    fontSize: SIZE.huge,
  },
  extraLarge: {
    fontSize: 20,
  },
  higantic: {
    fontSize: SIZE.higantic,
  },
  big: {
    fontSize: SIZE.big,
  },
  extraHuge: {
    fontSize: SIZE.extraHuge,
  },
  littleLarge: {
    fontSize: SIZE.littleLarge,
  },

  regular: {
    // fontFamily: FAMILY.regular,
  },
  bold: {
    // fontFamily: FAMILY.bold,
  },

  /* Button */
  btnPrimary: {
    backgroundColor: "rgba(51,51,51,1)",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  btnPrimaryText: {
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
  },
  btnDefault: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLOR.green,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  btnDefaultText: {
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
  },
  btnDefaultIcon: {
    fontSize: SIZE.large,
    color: COLOR.light,
  },

  // *** footer *** //

  bot: {
    height: 60,
    backgroundColor: COLOR.light,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.02)",
  },
  botPop: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLOR.light,
    justifyContent: "center",
    zIndex: 100,
  },
  botPopBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: COLOR.darkLight,
    flexDirection: "column",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLOR.darkLight,
    width: 70,
    height: 70,
    bottom: 5,
  },
  botPopText: {
    color: COLOR.light,
    fontSize: SIZE.medium,
    // fontFamily: FAMILY.bold,
  },
  botPopIcon: {
    fontSize: SIZE.huge,
    color: COLOR.light,
    marginBottom: 5,
  },
  botBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: COLOR.light,
  },
  botBtnHomeColor: {
    color: "rgba(48, 80, 230, 1)",
  },
  botBtnJobColor: {
    color: "rgba(124, 184, 50, 1)",
  },
  botBtnPostColor: {
    color: "rgba(245, 117, 32, 1)",
  },
  botBtnBlogColor: {
    color: "rgba(240, 78, 138, 1)",
  },
  botText: {
    color: "#666",
    fontSize: SIZE.extraTiny,
    // fontFamily: FAMILY.bold,
  },
  botIcon: {
    fontSize: SIZE.huge,
    color: "#666",
    marginBottom: 5,
  },
  botTextActive: {
    color: COLOR.darkLight,
    fontSize: SIZE.extraTiny,
    // fontFamily: FAMILY.regular,
  },
  botIconActive: {
    fontSize: SIZE.huge,
    color: COLOR.darkLight,position: "absolute",
    // zIndex: 3,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    borderColor: COLOR.smokeDark,
    borderWidth: 1,
  },
  fTabView: {
    flexDirection: "row",
  },
  fTabDescript: {
    alignSelf: "center",
    fontSize: SIZE.small,
    color: COLOR.grey,
    // fontFamily: FAMILY.regular,
  },
  fTabIcon: {
    fontSize: SIZE.huge,
    color: COLOR.grey,
  },
});
