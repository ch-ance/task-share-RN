import React from "react";
import { Button, Text, View } from "react-native";
import FooterNav from "../components/FooterNav"
const ViewTaskListScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
      }}
    >
      <Text>Task List Screen Component</Text>
      <FooterNav />
    </View>
  );
};

export default ViewTaskListScreen;
