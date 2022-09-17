import React, { useEffect, useState } from "react";
import { View, Text } from "native-base";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { db } from "../../../../config";
import { collection, doc, getDoc } from "firebase/firestore";

const Item = ({ jobs, navigation }) => {
  const [dummyData, setDummyData] = useState([]);

  const chatVendor = () => {
    navigation.navigate("Chat");
  };

  useEffect(() => {
    async function readProfile() {
      const docRef = doc(db, "occupation", "occupation-id");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // setDummyData(...dummyData, docSnap.data())
        console.log("Document data:", docSnap.data());
        const profiles = [];

        const data = {
          "fullName": docSnap.data().fullName,
          "skill": docSnap.data().skill,
          "city": docSnap.data().city,
          "lga": docSnap.data().lga,
        };
        profiles.push(data);
        setDummyData(profiles);

        console.log(dummyData, "na the profile be this");
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    readProfile();
  }, []);

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummyData.map((list, i ) => (
          <View style={styles.featuredLayout} key={i}>
            <View style={styles.featuredcolorBox}>
              <View style={styles.featuredColorRow}>
                <View style={styles.featuredColor} />
                <View>
                  <View style={styles.featuredColorLay} />
                  <View style={styles.featuredColorLayout} />
                </View>
              </View>
              <View style={styles.featuredDetails}>
                <Text style={styles.designation}>{list?.fullName}</Text>
                <Text style={styles.companyName}>{list?.skill}</Text>
                <Text style={styles.place}>{list?.city}</Text>
                <Text style={styles.lga}>{list?.lga}</Text>
              </View>
              <TouchableOpacity style={styles.apply} onPress={chatVendor}>
                <Text style={styles.applyBtn}>MESSAGE</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Item;

const styles = StyleSheet.create({
  featuredLayout: {
    width: 250,
    height: 180,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 20,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowColor: "#f0f0f0",
    shadowOpacity: 0.1,
    shadowRadius: 0,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  featuredcolorBox: {
    justifyContent: "flex-start",
    marginHorizontal: 20,
    marginVertical: 30,
  },
  featuredColorRow: {
    flexDirection: "row",
  },
  featuredColor: {
    height: 70,
    width: 70,
    borderRadius: 5,
    marginTop: 15,
    opacity: 0.3,
  },
  featuredColorLay: {
    height: 44,
    width: 44,
    borderRadius: 5,
    marginTop: 15,
    opacity: 0.3,
    margin: 5,
  },
  featuredColorLayout: {
    height: 24,
    width: 24,
    borderRadius: 5,
    opacity: 0.3,
    margin: 5,
  },
  featuredDetails: {
    width: "100%",
    position: "absolute",
  },
  designation: {
    width: 130,
    // fontFamily: FAMILY.bold,
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
    marginTop: 5,
  },
  companyName: {
    // fontFamily: FAMILY.regular,
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    paddingTop: 10,
  },
  place: {
    // fontFamily: FAMILY.regular,
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
    paddingTop: 20,
  },
  lga: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
  },
  apply: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  applyBtn: {
    // fontFamily: FAMILY.bold,
    fontSize: 12,
  },
});
