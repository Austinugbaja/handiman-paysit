import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";

import { lga } from "../screen/Public/Home/data/cities";
import { useEffect } from "react";

const LgaSearchComp = ({ toggleIcon, city }) => {
  useEffect(() => {
    console.log(lga[city], "this is a city");
  }, [city]);

  return (
    <>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.layoutFx}
      >
        {lga[city].map((list, i) => (
          <TouchableOpacity
            key={i}
            style={styles.container}
            onPress={() => toggleIcon(list)}
          >
            <Text style={styles.textCity}>{list}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default LgaSearchComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "gray",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  layoutFx: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 5,
    backgroundColor: "#fff",
  },
  textCity: {
    color: "black",
  },
});
