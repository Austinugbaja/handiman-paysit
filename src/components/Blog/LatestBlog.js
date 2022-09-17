import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const LatestBlog = ({blogData}) => {
  // console.log(blogData?.title, 'this is a blog')
  return (
    <>
      <View style={styles.latestContainer}>
        <View style={styles.imgBg}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1222949/pexels-photo-1222949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            }}
            style={styles.blogImage}
          />
          <Text style={styles.latestTitle}>
            {blogData?.title}
          </Text>
          <View style={styles.latestContent}>
            <View style={styles.latestItem}>
              <Icon name="bookmark-o" />
              <Text style={styles.timeText}>Mar 23,2019</Text>
            </View>
            <View style={styles.latestItem}>
              <Icon name="map-marker" />
              <Text style={styles.timeText}>40 comments</Text>
            </View>
          </View>
          <View style={styles.blogRow}>
            <Icon name="calendar" />
            <Text style={styles.blogTime}>Mar 02,2019</Text>
          </View>
          <Text style={styles.latestText}>
            {blogData?.paragraph_1}
          </Text>
        </View>
      </View>
    </>
  );
};

export default LatestBlog;

const styles = StyleSheet.create({
  latestContainer: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    elevation: 10,
    borderRadius: 5,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowColor: "#999",
    shadowOpacity: 0.1,
    shadowRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 5,
    padding: 15,
  },
  imgBg: {
    width: "100%",
  },
  blogImage: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  latestTitle: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.7)",
    marginVertical: 10,
  },
  latestContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  latestItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    paddingVertical: 5,
  },
  timeText: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    paddingLeft: 5,
  },
  blogRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  blogTime: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    paddingLeft: 5,
  },
  latestText: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    lineHeight: 18,
    marginVertical: 5,
  },
});
