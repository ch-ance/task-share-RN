import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import { useStateValue } from "../../state";
const FooterNav = ({ navigation }) => {
  const [{ currentScreen }, dispatch] = useStateValue();

  function changeScreens(targetScreen) {
    dispatch({
      type: "changeScreen",
      payload: targetScreen
    });
    navigation.navigate(targetScreen);
  }

  const isActive = screenName => currentScreen === screenName;

  return (
    <Footer>
      <FooterTab>
        <Button
          vertical
          onPress={() => changeScreens("MyLists")}
          active={isActive("MyLists")}
        >
          <Icon name="add" />
          <Text>Create</Text>
        </Button>
        <Button
          vertical
          onPress={() => changeScreens("Home")}
          active={isActive("Home")}
        >
          <Icon name="home" />
          <Text>Home</Text>
        </Button>
        <Button vertical>
          <Icon name="search" />
          <Text>Explore</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterNav;
