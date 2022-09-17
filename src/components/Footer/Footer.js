import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = ({ navigation }) => {
  const goHome = () => {
    navigation.navigate("Home");
  };

  const goJobs = () => {
    navigation.navigate("Home");
  };

  const goProfile = () => {
    navigation.navigate("Resume");
  };

  const goPostJobs = () => {
    navigation.navigate("Home");
  };

  const goBlog = () => {
    navigation.navigate("Blog");
  };

  return (
    <View style={styles.bot}>
      <TouchableOpacity style={styles.botBtn} onPress={goHome}>
        <Icon
          name="home"
          style={[styles.botIconActive, styles.botBtnHomeColor]}
        />
        <Text style={[styles.botTextActive, styles.botBtnHomeColor]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botBtn} onPress={goJobs}>
        <Icon name="globe" style={[styles.botIcon, styles.botBtnJobColor]} />
        <Text style={[styles.botText, styles.botBtnJobColor]}>Jobs</Text>
      </TouchableOpacity>
      <View style={styles.botPop}>
        <TouchableOpacity style={styles.botPopBtn} onPress={goProfile}>
          <Icon name="user" style={styles.botPopIcon} />
          <Text style={styles.botPopText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.botBtn} onPress={goPostJobs}>
        <Icon
          name="address-card"
          style={[styles.botIcon, styles.botBtnPostColor]}
        />
        <Text style={[styles.botText, styles.botBtnPostColor]}>Post Job</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botBtn} onPress={goBlog}>
        <Icon
          name="newspaper-o"
          style={[styles.botIcon, styles.botBtnBlogColor]}
        />
        <Text style={[styles.botText, styles.botBtnBlogColor]}>Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  bot: {
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "rgba(0,0,0,0.02)",
  },
  botBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  botIconActive: {
    fontSize: 24,
    color: "rgba(0, 0, 0, 0.8)",
    marginBottom: 5,
  },
  botBtnHomeColor: {
    color: "rgba(48, 80, 230, 1)",
  },
  botTextActive: {
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: 8,
  },
  botIcon: {
    fontSize: 24,
    color: "#666",
    marginBottom: 5,
  },
  botBtnJobColor: {
    color: "rgba(124, 184, 50, 1)",
  },
  botText: {
    color: "#666",
    fontSize: 8,
  },
  botPop: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    zIndex: 100,
  },
  botPopBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    flexDirection: "column",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
    width: 70,
    height: 70,
    bottom: 5,
  },
  botPopIcon: {
    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
  },
  botPopText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
  },
  botBtnPostColor: {
    color: "rgba(245, 117, 32, 1)",
  },
  botBtnBlogColor: {
    color: "rgba(240, 78, 138, 1)",
  },
});
