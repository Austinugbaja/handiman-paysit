import React, { useState } from "react";
import { View, Text, ScrollView } from "native-base";
import { TouchableOpacity, TextInput } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

import { cities } from "../../Public/Home/data/cities";

import { db } from "../../../config";
import { auth } from "../../../config";
import { onAuthStateChanged } from "firebase/auth";

import { collection, addDoc, Timestamp } from "firebase/firestore";

import styles from "./styles";
import theme from "../../../themes/styles";

const Resume = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [skill, setSkill] = useState("");
  const [city, setCity] = useState("");
  const [lga, setLga] = useState("");
  // const [open, setOpen] = useState(false);
  // const [items, setItems] = useState([cities]);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // const fetchOccupationalId = () => {

  // }

  // function to add profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(occupations, "this is the v");
    try {
      await addDoc(collection(db, "occupation"), {
        fullName: fullName,
        skill: skill,
        city: city,
        lga: lga,
        completed: false,
        created: Timestamp.now(),
      }).then(() => {
        navigation.navigate("ProfileDashboard");
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.resumeContainer}>
          <View style={styles.resumeHeader}>
            <Text style={styles.resumeHeaderTitle}>PERSONAL</Text>
            <Text style={styles.resumeHeaderText}>DETAILS</Text>
          </View>
          <View style={styles.resumeContent}>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Full Name</Text>
              <TextInput
                placeholder="Cindrella"
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
                value={fullName}
                onChangeText={(text) => setFullName(text)}
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Email ID</Text>
              <TextInput
                placeholder="cind@gmail.com"
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
                value={user?.email}
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Mobile Number</Text>
              <TextInput
                placeholder="+91 ---------"
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>State of residence</Text>
              <View>
                <TextInput
                  placeholder="state of residence...."
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  style={styles.formInput}
                  value={city}
                  onChangeText={(text) => setCity(text)}
                />
                {/* <DropDownPicker
                  items={[
                    { label: "PhD", value: "1 Unit" },
                    { label: "Graduation", value: "2 Unit" },
                    { label: "PostGraduation", value: "3 Unit" },
                    { label: "12th", value: "4 Unit" },
                  ]}
                  //   defaultValue={this.state.country}

                  containerStyle={{ height: 40 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  //   onChangeItem={item => this.setState({
                  //     country: item.value
                  //   })}
                /> */}
              </View>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>LGA of residence</Text>
              <View>
                <TextInput
                  placeholder="lga of residence..."
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  style={styles.formInput}
                  value={lga}
                  onChangeText={(text) => setLga(text)}
                />
                {/* <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  //   defaultValue={this.state.country}

                  containerStyle={{ height: 30, marginBottom: 10 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  //   onChangeItem={item => this.setState({
                  //     country: item.value
                  //   })}
                /> */}
              </View>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Current Experience</Text>
              <TextInput
                placeholder="2 years"
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Expected Salary</Text>
              <TextInput
                placeholder="$2000"
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
              />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Description</Text>
              <TextInput
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
              />
            </View>
            <View style={styles.searchJob}>
              <Text style={styles.formText}>Skills</Text>
              <TextInput
                placeholder="Php Developer,Web Designer .."
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
                value={skill}
                onChangeText={(text) => setSkill(text)}
              />
            </View>
            {/* <View style={styles.formRow}>
              <Text style={styles.formText}>{__('Post your Resume')}</Text>
              <TextInput placeholder={__('Attach your resume')}
                multiline
                numberOfLines={7}
                textAlignVertical={'top'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                style={styles.formInput} />
            </View> */}
          </View>
          {/* <View style={styles.resumeHeader}>
            <Text style={styles.resumeHeaderTitle}>EDUCATION</Text>
            <Text style={styles.resumeHeaderText}>DETAILS</Text>
          </View>
          <View style={styles.resumeContent}>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Highest Qualification</Text>
              <View>
                <DropDownPicker
                  items={[
                    { label: "PhD", value: "1 Unit" },
                    { label: "Graduation", value: "2 Unit" },
                    { label: "PostGraduation", value: "3 Unit" },
                    { label: "12th", value: "4 Unit" },
                  ]}
                  //   defaultValue={this.state.country}

                  containerStyle={{ height: 40 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  //   onChangeItem={item => this.setState({
                  //     country: item.value
                  //   })}
                />
              </View>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>Course Details</Text>
              <View>
                <DropDownPicker
                  items={[
                    { label: "MBA", value: "5 Unit" },
                    { label: "MCA", value: "6 Unit" },
                    { label: "CA", value: "7 Unit" },
                    { label: "M.Pharm", value: "8 Unit" },
                  ]}
                  //   defaultValue={this.state.country}
                  containerStyle={{ height: 40 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  //   onChangeItem={item => this.setState({
                  //     country: item.value
                  //   })}
                />
              </View>
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>University/College</Text>
              <View>
                <DropDownPicker
                  items={[
                    { label: "Anna University", value: "9 Unit" },
                    { label: "M.S.University", value: "10 Unit" },
                    { label: "Oxford", value: "11 Unit" },
                  ]}
                  //   defaultValue={this.state.country}

                  containerStyle={{ height: 40 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  //   onChangeItem={item => this.setState({
                  //     country: item.value
                  //   })}
                />
              </View>
            </View>
            <View style={styles.searchJob}>
              <Text style={styles.formText}>Skills</Text>
              <TextInput
                placeholder="Php Developer,Web Designer .."
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.formInput}
              />
            </View>
          </View> */}
          {/* <View style={styles.resumeHeader}>
            <Text style={styles.resumeHeaderTitle}>FIRM</Text>
            <Text style={styles.resumeHeaderText}>{__('DETAILS')}</Text>
          </View>
          <View style={styles.resumeContent}>
            <View style={styles.formRow}>
              <Text style={styles.formText}>{__('Firm Name')}</Text>
              <TextInput placeholder={__('Infosys')} placeholderTextColor={'rgba(0,0,0,0.5)'} style={styles.formInput} />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>{__('Experience')}</Text>
              <TextInput placeholder={__('2-5 years')} placeholderTextColor={'rgba(0,0,0,0.5)'} style={styles.formInput} />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.formText}>{__('Salary')}</Text>
              <TextInput placeholder={__('$1000')} placeholderTextColor={'rgba(0,0,0,0.5)'} style={styles.formInput} />
            </View>
          </View> */}
        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitBtnText}>Submit a Job</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Resume;
