import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnPosts } from "../../actions/posts";
import Loader from "../../components/Loader";
import Post from "../../components/Posts/Post/Post";
import "./ownposts.css";

const OwnPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.ownPosts);
  const getRenderedPosts = () => {
    console.log(posts);
    return !posts ? (
      <Loader />
    ) : !posts.length ? (
      <p>You have no stories yet</p>
    ) : (
      <>
        {posts.map((post) => (
          <Post key={post._id} post={post} showActions={true} />
        ))}
      </>
    );
  };

  return <div className="own-stories">{getRenderedPosts()}</div>;
};

export default OwnPosts;
