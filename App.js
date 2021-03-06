import React, { useState } from "react";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppScreen from "./app/components/AppScreen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}
