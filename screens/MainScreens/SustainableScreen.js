import React from "react";
import {
  FlatList,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs(true);

const data = [
  {
    id: "01",
    title: "Beans",
  },
  {
    id: "02",
    title: "Sardines",
  },
  {
    id: "03",
    title: "Broccoli",
  },
  {
    id: "04",
    title: "Pear",
  },
  {
    id: "05",
    title: "Bamboo",
  },
  {
    id: "06",
    title: "Potatoes",
  },
  {
    id: "07",
    title: "Green Peas",
  },
  {
    id: "08",
    title: "Kale",
  },
  {
    id: "09",
    title: "Paper",
  },
  {
    id: "10",
    title: "Bison",
  },
];

const SustainableItem = ({ title }) => (
  <TouchableOpacity activeOpacity={0.7}>
    <View style={sustainableStyles.sustainableItem}>
      <Text style={sustainableStyles.sustainableItemText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const SustainableScreen = () => {
  const renderItem = ({ item }) => <SustainableItem title={item.title} />;

  return (
    <View style={sustainableStyles.container}>
      <Text style={sustainableStyles.title}>Sustainable Foods</Text>
      <View style={sustainableStyles.searchBarContainer}>
        <TextInput
          placeholder="Search Sustainable Foods"
          placeholderTextColor="#777777"
          style={sustainableStyles.searchBarInput}
        />
      </View>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};

export default SustainableScreen;

const sustainableStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: hp(13),
  },
  title: {
    fontFamily: "Avenir",
    fontSize: hp(3.24),
    fontWeight: "700",
    color: "#FFF",
    marginBottom: hp(3),
  },
  searchBarContainer: {
    backgroundColor: "#2A2A2A",
    width: wp(80),
    height: hp(6),
    paddingVertical: hp(1.08),
    paddingLeft: hp(3.5),
    borderRadius: 12,
    justifyContent: "center",
    marginBottom: hp(4.7),
  },
  searchBarInput: {
    color: "#fff",
  },
  sustainableItem: {
    width: wp(60),
    height: hp(6),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#2A2A2A",
    marginVertical: hp(1.08),
  },
  sustainableItemText: {
    color: "#fff",
    fontFamily: "Avenir",
    fontWeight: "500",
  },
});
