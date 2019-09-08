import React, { useState } from "react";
import { Text, View } from "react-native";
import ListPost from "../components/SocialFeed/ListPost";

const SocialFeed = () => {
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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "skyblue"
      }}
    >
      <Text>Social Feed</Text>
      {listPosts.map(post => {
        return <ListPost key={post.id} post={post}/>
      })}
    </View>
  );
};

export default SocialFeed;
