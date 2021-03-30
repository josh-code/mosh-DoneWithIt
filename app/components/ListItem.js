import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppFont from "./AppFont";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.ListItemContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppFont style={styles.title}>{title}</AppFont>
            {subTitle && <AppFont style={styles.subTitle}>{subTitle}</AppFont>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  ListItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: colors.white,
    // alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "400",
    // fontSize: 15,
  },
  subTitle: {
    color: colors.medium,
    // fontSize: 14,
  },
});

export default ListItem;
