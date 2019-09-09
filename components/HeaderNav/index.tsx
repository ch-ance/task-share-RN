import * as React from "react";
import {
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  Container
} from "native-base";

const HeaderNav = () => {
  return (
    <Header
      noShadow
      style={{ backgroundColor: "blue", marginTop: 20, width: "100%" }}
    >
      <Left>
        <Button transparent>
          <Icon name="add" />
        </Button>
      </Left>
      <Body>
        <Title>Task Share</Title>
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
