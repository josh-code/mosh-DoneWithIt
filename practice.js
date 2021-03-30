// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   StatusBar as ReactStatusBar,
//   View,
//   TouchableHighlight,
//   SafeAreaView,
//   Image,
//   TouchableNativeFeedback,
//   Button,
//   Alert,
//   Platform,
// } from "react-native";

// export default function App() {
//   const handleClick = () => console.log("dont touch me!");
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={4} onPress={handleClick} style={styles.text}>
//         This is the first App!
//       </Text>
//       <TouchableHighlight onPress={() => console.log("Image Tapped")}>
//         <Image
//           fadeDuration={1000}
//           blurRadius={1}
//           source={{
//             width: 300,
//             height: 200,
//             uri: "https://picsum.photos/300/200",
//           }}
//         />
//       </TouchableHighlight>
//       <TouchableNativeFeedback onPress={() => console.log("Native Feedback")}>
//         <View style={styles.view}></View>
//       </TouchableNativeFeedback>
//       <Button
//         title="Click Me"
//         onPress={() => {
//           Alert.alert("WTF?", "Did you press that on purpose?", [
//             { text: "Yea", onPress: () => console.log("Yea") },
//             { text: "Hell Yea", onPress: () => console.log("Hell Yea") },
//           ]);
//           // Alert.prompt("WTF?", "Did you press that on purpose?", text => console.log(text))
//         }}
//       />
//       <StatusBar style="light" />
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "dodgerblue",
//     alignItems: "center",
//     paddingTop: Platform.OS === "android" ? ReactStatusBar.currentHeight : 0,
//     // justifyContent: "center",
//   },
//   view: { width: 300, height: 40, backgroundColor: "blue" },
//   text: {
//     textAlign: Platform.OS === "android" ? "center" : "left",
//     color: "white",
//     fontSize: 60,
//   },
// });
