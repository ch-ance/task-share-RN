import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { createAppContainer } from "react-navigation";
import { StateProvider } from "./state";
import MyListsScreen from "./views/MyListsScreen";
import SocialFeed from "./views/SocialFeed";
import SideDrawer from "./components/SideDrawer";
import { createDrawerNavigator } from 'react-navigation-drawer';

const AppNavigator = createDrawerNavigator(
  {
    Social: { screen: SocialFeed },
    MyLists: { screen: MyListsScreen }
  },
  {
    contentComponent: props => <SideDrawer {...props} />
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default props => {
  const [isReady, setIsReady] = useState(false);

  // Global State configuration 
  const initialState = {
    currentScreen: "Home"
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "changeScreen":
        return {
          ...state,
          currentScreen: payload
        };

      default:
        return state;
    }
  };

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
        EvilIcons: require("native-base/Fonts/EvilIcons.ttf")
        // ...Ionicons.font,
      });
      setIsReady(true);
    }
    loadFonts();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  } else
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <AppContainer {...props} />
      </StateProvider>
    );
};
