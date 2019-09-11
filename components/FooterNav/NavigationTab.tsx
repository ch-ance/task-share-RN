import * as React from "react";
import { Button, Icon, Text } from "native-base";

const NavigationTab = ({ changeScreens, isActive, route }) => {
  return (
    <Button
      vertical
      onPress={() => changeScreens(route.screenName)}
      active={isActive(route.screenName)}
    >
      <Icon name={route.icon} />
      <Text>{route.screenName}</Text>
    </Button>
  );
};

export default NavigationTab;
