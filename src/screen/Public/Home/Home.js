import React, { useEffect, useState } from "react";
import { View, Text, Button } from "native-base";
import { TouchableOpacity, TextInput, Image } from "react-native";
// import { Icon } from "react-native-vector-icons/Icon";

import styles from "./styles";
import theme from "../../../themes/styles";
import Item from "./Featured/Item";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchBar from "../../../components/SearchBar";
import { featuredList } from "../Home/data/featured";
import Footer from "../../../components/Footer/Footer";
import LgaSearchComp from "../../../components/LgaSearchComp";
import { signOut } from "firebase/auth";
import { auth } from "../../../config";
// import { StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  const [onDisplayCity, setOnDisplayCity] = useState(false);
  const [onDisplayLga, setOnDisplayLga] = useState(false);
  const [city, setCity] = useState("");
  const [lga, setLga] = useState("");
  const [jobs, setJobs] = useState([]);
  const [val, setVal] = useState("");
  const [filteredData, setfilteredData] = useState(jobs);

  const toggleCityIcon = (params) => {
    setOnDisplayCity(!onDisplayCity);
    setCity(params);
    // const filteredData = featuredList.filter(
    //   (list) => list.location === params
    // );
    // setJobs(filteredData);
  };

  const toggleLgaIcon = (params) => {
    setOnDisplayLga(!onDisplayLga);
    setLga(params);
    // const filteredData = featuredList.filter(
    //   (list) => list.location === params
    // );
    // setJobs(filteredData);
  };

  const handleSearchIcon = (val) => {
    // const lowercasedValue = val.toLowerCase();
    let updatedJobs = [...jobs];
    let filteredJobs = updatedJobs.filter((data) => {
      return data.location.includes(city);
      // return data.list.toLowerCase().includes(lga);
    });
    setJobs(filteredJobs);
  };

  const setCityInput = (params) => {
    setCity(params);
  };

  const setLgaInput = (params) => {
    setLga(params);
  };

  useEffect(() => {
    handleSearchIcon(val);
    // const filteredData = featuredList.filter((list) => list.location !== "");
    // setJobs(filteredData);
  }, [val]);

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  // console.log(Boolean(city.length));
  return (
    <>
      {onDisplayCity && <SearchBar toggleIcon={toggleCityIcon} />}
      {onDisplayLga && <LgaSearchComp city={city} toggleIcon={toggleLgaIcon} />}
      <View>
        <View>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2018/05/01/11/40/man-3365368_960_720.jpg",
              }}
              resizeMode={"cover"}
              style={styles.bgImg}
            />
            <View style={styles.searchJob}>
              <TextInput
                placeholder="ie. states"
                placeholderTextColor="rgba(0,0,0,0.2)"
                style={styles.formInput}
                value={city}
              />
              <TouchableOpacity
                style={styles.iconInput}
                onPress={toggleCityIcon}
              >
                <Icon
                  name="map-marker"
                  backgroundColor="black"
                  // type="MaterialIcons"
                  // style={[theme.extraLarge, theme.greyDark]}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.searchCity}>
              <TextInput
                placeholder="ie. Lga"
                placeholderTextColor="rgba(0,0,0,0.2)"
                style={styles.formInput}
                value={lga}
              />
              <TouchableOpacity
                style={styles.iconInput}
                onPress={toggleLgaIcon}
              >
                <Icon
                  name="map-marker"
                  backgroundColor="black"
                  // type="MaterialIcons"
                  // style={[theme.extraLarge, theme.greyDark]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconSearch}
                onPress={handleSearchIcon}
              >
                <Icon name="search" style={{ color: "#fff" }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View style={styles.jobHeader}>
            <Text style={styles.jobMainHeaderDesc}>FEATURED</Text>
            <Text style={styles.jobMainHeader}>JOBS</Text>
          </View>
          <View>
            <Item jobs={jobs} navigation={navigation} />
          </View>
        </View>
        <TouchableOpacity style={styles.signInBtn} onPress={handleLogout}>
          <Text style={styles.signInBtnText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </>
  );
};

export default Home;
