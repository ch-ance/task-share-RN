import React from "react";
import { Container, Content, Text } from "native-base";
import HeaderNav from "../components/HeaderNav";
import FooterNav from "../components/FooterNav";
const ViewTaskListScreen = props => {
  const { navigation } = props;

  const nestedRoutes = [
    {
      screenName: "Explore",
      icon: "navigate"
    },
    {
      screenName: "Feed",
      icon: "list"
    },
    {
      screenName: "Search",
      icon: "search"
    }
  ];

  return (
    <Container
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
      }}
    >
      <HeaderNav navigation={navigation}/>
      <Content>
        <Text>Task List Screen Component</Text>
      </Content>
      <FooterNav navigation={navigation} nestedRoutes={nestedRoutes} />

    </Container>
  );
};

export default ViewTaskListScreen;
