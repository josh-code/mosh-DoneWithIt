import React from "react";
import { View, StyleSheet, StatusBar, Image } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <StatusBar hidden={true} />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    // justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    top: 50,
  },
});
