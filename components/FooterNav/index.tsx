import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
const FooterNav = ({ navigation }) => {
  // const activeTab = navigation.

  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => navigation.navigate("MyLists")}>
          <Icon name="add" />
          <Text>Create</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate("Home")}>
          <Icon name="list" />
          <Text>Feed</Text>
        </Button>
        <Button vertical>
          <Icon name="navigate" />
          <Text>Explore</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterNav;
