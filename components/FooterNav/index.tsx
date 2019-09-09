import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
const FooterNav = () => {
  return (
    <Footer>
      <FooterTab>
        <Button vertical>
          <Icon name="list" />
          <Text>Settings</Text>
        </Button>
        <Button vertical>
          <Icon name="add" />
          <Text>Create</Text>
        </Button>
        <Button vertical active>
          <Icon active name="navigate" />
          <Text>Explore</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterNav;
