import React from "react";
import { Button, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ViewTaskListScreen from "./views/ViewTaskListScreen";
import SocialFeed from "./views/SocialFeed";

const HomeScreen = props => {
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
      }}
    >
      <Text>Home Screen Component</Text>
      <Button title="hey" onPress={() => navigation.navigate("TaskList")} />
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: SocialFeed,
    MyLists: ViewTaskListScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default props => {
  return <AppContainer />;
};
