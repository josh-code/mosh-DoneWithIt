import React from "react";

import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppFont from "./AppFont";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppFont style={styles.title}>{title}</AppFont>
        <AppFont style={styles.subTitle}>{subTitle}</AppFont>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 170,
  },
  textContainer: {
    padding: 10,
    paddingLeft: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
