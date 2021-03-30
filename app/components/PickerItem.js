import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppFont from "./AppFont";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppFont style={styles.text}>{label}</AppFont>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
