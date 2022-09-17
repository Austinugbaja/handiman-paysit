import { COLOR, SIZE } from "../../../themes/typography";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // *** Content *** //
  resumeContainer: {
    marginBottom: 15,
  },
  resumeHeader: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  resumeHeaderTitle: {
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.lightGrey,
  },
  resumeHeaderText: {
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.greyDark,
  },
  resumeContent: {
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowColor: "#f0f0f0",
    shadowOpacity: 0.1,
    shadowRadius: 0,
    backgroundColor: COLOR.light,
    borderRadius: 5,
  },
  formRow: {
    marginBottom: 15,
  },
  formInput: {
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    borderColor: COLOR.smokeDark,
    borderWidth: 1,
    borderRadius: 3,
    // flex: 1,
    backgroundColor: COLOR.light,
    paddingLeft: 10,
  },
  formText: {
    // fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark,
    paddingBottom: 5,
  },
  submitBtn: {
    backgroundColor: COLOR.greyDark,
    padding: 10,
  },
  submitBtnText: {
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light,
    alignSelf: "center",
  },
});
