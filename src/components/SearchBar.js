import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { cities } from "../screen/Public/Home/data/cities";

const SearchBar = ({toggleIcon}) => {
  const [value, setValue] = useState("");

  return ( 
    <>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.layoutFx}
      >
        {cities.map((list, i) => (
          <TouchableOpacity
            key={i}
            style={styles.container}
            onPress={() => toggleIcon(list?.name)}
          >
            <Text style={styles.textCity}>{list?.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SearchBar;

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
