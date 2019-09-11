import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import { useStateValue } from "../../state";
const FooterNav = ({ navigation, nestedRoutes }) => {

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
          onPress={() => changeScreens(nestedRoutes[0].screenName)}
          active={isActive(nestedRoutes[0].screenName)}
        >
          <Icon name={nestedRoutes[0].icon} />
          <Text>{nestedRoutes[0].screenName}</Text>
        </Button>
        <Button
          vertical
          onPress={() => changeScreens(nestedRoutes[1].screenName)}
          active={isActive(nestedRoutes[1].screenName)}
        >
          <Icon name={nestedRoutes[1].icon} />
          <Text>{nestedRoutes[1].screenName}</Text>
        </Button>
        <Button vertical
          onPress={() => changeScreens(nestedRoutes[2].screenName)}
          active={isActive(nestedRoutes[2].screenName)}
        >
          <Icon name={nestedRoutes[2].icon} />
          <Text>{nestedRoutes[2].screenName}</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterNav;
