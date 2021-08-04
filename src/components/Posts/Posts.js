import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";

import Post from "./Post/Post";
const Posts = ({ setCurrentId, currentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <Loader />
  ) : (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
      ))}
    </>
  );
};

export default Posts;
