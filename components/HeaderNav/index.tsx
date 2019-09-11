import * as React from "react";
import {
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
} from "native-base";

const HeaderNav = ({ navigation }) => {

  return (
    <Header
      noShadow
      style={{ backgroundColor: "blue", marginTop: 20, width: "100%" }}
    >
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Task Share!</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="person" />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderNav;
