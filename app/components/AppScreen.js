import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

function AppScreen({ children, style }) {
  // return <View style={[styles.container, props.style]}>{props.children}</View>;
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default AppScreen;
