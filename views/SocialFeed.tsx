import React, { useState } from "react";
import { Container, Content, Text } from "native-base";
import ListPost from "../components/SocialFeed/ListPost";
import HeaderNav from "../components/HeaderNav"
import FooterNav from "../components/FooterNav";

const SocialFeed = props => {
  const { navigation } = props;

  const [listPosts, setListPosts] = useState([
    {
      id: 1,
      title: "30 minute workout routine",
      categories: ["Fitness"]
    },
    {
      id: 2,
      title: "Web accessibility checklist",
      categories: ["Web Development", "Software Engineering"]
    }
  ]);

  return (
    <Container
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "skyblue"
      }}
    >
      <HeaderNav navigation={navigation}/>
      <Content>

        <Text>Social Feed</Text>
        {listPosts.map(post => {
          return <ListPost key={post.id} post={post} />;
        })}
      </Content>
      <FooterNav navigation={navigation} />
    </Container>
  );
};

export default SocialFeed;
