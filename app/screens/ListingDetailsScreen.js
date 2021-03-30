import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppFont from "../components/AppFont";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.screenContainer}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.headingContainer}>
        <AppFont style={styles.title}>Red Jacket for sale</AppFont>
        <AppFont style={styles.price}>$100</AppFont>
        <View style={styles.listContainer}>
          <ListItem
            image={require("../assets/joshua.jpeg")}
            title={"Joshua Fernandes"}
            subTitle={"5 Listings"}
          />
        </View>
      </View>
      <StatusBar style={"auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "35%",
  },
  headingContainer: {
    padding: 15,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  listContainer: {
    marginTop: 40,
  },
});

export default ListingDetailsScreen;
