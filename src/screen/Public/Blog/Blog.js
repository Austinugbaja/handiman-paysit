import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import LatestBlog from "../../../components/Blog/LatestBlog";
import Footer from "../../../components/Footer/Footer";

const Blog = ({ navigation }) => {
  const [blogData, setBlogData] = useState([]);

  const getBlogApi = async () => {
    const options = {
      method: "GET",
    };

    fetch("https://handiblog.handimanexecutive.com/api/posts")
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  };

  useEffect(() => {
    getBlogApi();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        {blogData.map((blogData, index) => (
          <LatestBlog key={index} blogData={blogData} />
        ))}
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center"
  },
});
