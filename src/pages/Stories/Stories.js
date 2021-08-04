import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import Hero from "../../components/Hero/Hero";
import Loader from "../../components/Loader";
import Post from "../../components/Posts/Post/Post";
import "./stories.css";

const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);
  const getRenderedPosts = () => {
    console.log(posts);
    return !posts.length ? (
      <Loader />
    ) : (
      <>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </>
    );
  };

  return (
    <div className="stories">
      <Hero />
      <div className="stories__wrapper">{getRenderedPosts()}</div>
    </div>
  );
};

export default Blog;
