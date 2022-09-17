import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

// import styles
import { COLOR, SIZE } from "../../themes/typography";
import Footer from "../../components/Footer/Footer";

import { db } from "../../config";
import { doc, getDoc } from "firebase/firestore";

import { usePaystackPayment } from "react-paystack";
import { auth } from "../../config";
import { onAuthStateChanged } from "firebase/auth";
import { Button } from "native-base";

const ProfileDashboard = ({ navigation }) => {
  const [dummyData, setDummyData] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email: auth.currentUser.email,
    amount: 5000,
    publicKey: "pk_test_5162d7c8f0fe85c5ad840be433efb18409052ce9",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    navigation.navigate("Home", {
      paramKey: auth.currentUser.email,
    });
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    async function readProfile() {
      const docRef = doc(db, "occupation", "gOCpS5Z1hepgBDg50Etv");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // setDummyData(...dummyData, docSnap.data())
        // console.log("Document data:", docSnap.data());
        // const profiles = "";

        const data = {
          "fullName": docSnap.data().fullName,
          "skill": docSnap.data().skill,
          "city": docSnap.data().city,
          "lga": docSnap.data().lga,
        };
        // profiles.push(data);
        setDummyData(data);

        // console.log(dummyData, "na the profile be this");
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
      }
    }

    readProfile();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.resumeContainer}>
          <View style={styles.resumeHeader}>
            <Text style={styles.resumeHeaderTitle}>PROFILE DETAILS</Text>
          </View>
          <View style={styles.resumeContent}>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Full Name</Text>
              <Text style={styles.formInput}>{dummyData?.fullName}</Text>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Email ID</Text>
              <Text style={styles.formInput}>{user?.email}</Text>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Mobile Number</Text>
              <Text style={styles.formInput}>djkqwqehfh</Text>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>State of residence</Text>
              <View>
                <Text style={styles.formInput}>{dummyData?.city}</Text>
              </View>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>LGA of residence</Text>
              <View>
                <Text style={styles.formInput}>{dummyData?.lga}</Text>
              </View>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Current Experience</Text>
              <Text style={styles.formInput}>dhwuifwiw</Text>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Expected Salary</Text>
              <Text style={styles.formInput}>djhwuiwuefh</Text>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Description</Text>
              <Text style={styles.formInput}>wfyuwfjiwfe</Text>
            </View>
            <View style={styles.searchJob}>
              <Text style={styles.formText}>Skills</Text>
              <Text style={styles.formInput}>{dummyData?.skill}</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Button
            style={{ backgroundColor: "blue" }}
            onPress={() => {
              initializePayment(onSuccess, onClose);
            }}
          >
            <Text style={styles.signUpBtnText}>Pay with Paystack</Text>
          </Button>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

export default ProfileDashboard;

const styles = StyleSheet.create({
  // *** Content *** //
  resumeContainer: {
    marginBottom: 15,
  },
  resumeHeader: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  resumeHeaderTitle: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
    // fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: "black",
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
    paddingVertical: 10,
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
  signUpBtnText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
  },
});
