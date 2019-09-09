import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Entypo: require("native-base/Fonts/Entypo.ttf"),
        Feather: require("native-base/Fonts/Feather.ttf"),
        FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
        MaterialIcons: require("native-base/Fonts/MaterialIcons.ttf"),
        MaterialCommunityIcons: require("native-base/Fonts/MaterialCommunityIcons.ttf"),
        Octicons: require("native-base/Fonts/Octicons.ttf"),
        SimpleLineIcons: require("native-base/Fonts/SimpleLineIcons.ttf"),
        EvilIcons: require("native-base/Fonts/EvilIcons.ttf"),
        // ...Ionicons.font,
      });
      setIsReady(true);
    }
    loadFonts();
  }, []);

  if (!isReady) {
    return <AppLoading/>;
  } else return <AppContainer />;
};
