import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import "./form.css";
import * as api from "../../api";
import { useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useHistory, useParams } from "react-router-dom";

const Form = (props) => {
  let { postId } = useParams();
  const [post, setPost] = useState(null);

  console.log(postId);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({
    message: post?.message ?? "",
    title: post?.title ?? "",
    tags: post?.tags?.join() ?? "",
    selectedFile: "",
  });
  useEffect(() => {
    const getPost = async () => {
      const { data } = await api.findPost(postId);
      setPost(data);
      // setPostData(data);
    };
    getPost();
  }, [postId]);
  // const currentPost = useSelector((state) =>
  //   currentId ? state.posts.find((p) => p._id === currentId) : null
  // );
  const history = useHistory();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (currentPost) {
  //     setPostData(currentPost);
  //   }
  // }, [currentPost]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: check if editing
    if (user?.token) {
      const d = decode(user?.token);
      if (d.exp * 1000 < new Date().getTime()) {
        dispatch({ type: "LOGOUT" });
        history.push("/session-expired");
      }
    }
    dispatch(createPost(postData));
    // if (currentId) {
    //   dispatch(updatePost(currentId, postData));
    // } else dispatch(createPost(postData));
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="post-form">
      <h2>Create a post</h2>
      {/* <input
        type="text"
        placeholder="creator"
        name="creator"
        value={postData.creator}
        onChange={(e) => {
          setPostData({ ...postData, creator: e.target.value });
        }}
      /> */}
      <input
        type="text"
        placeholder="title"
        name="title"
        value={postData.title}
        onChange={(e) => {
          setPostData({ ...postData, title: e.target.value });
        }}
      />
      <textarea
        type="text"
        // placeholder="message"
        name="message"
        value={postData.message}
        onChange={(e) => {
          setPostData({ ...postData, message: e.target.value });
        }}
      >
        Your story
      </textarea>
      <input
        type="text"
        placeholder="tags"
        name="tags, separate by commas"
        value={postData.tags}
        onChange={(e) => {
          setPostData({ ...postData, tags: e.target.value });
        }}
      />
      <div className="post-form__file-input">
        <FileBase
          type="file"
          multiple={false}
          onDone={(base64) => {
            setPostData({ ...postData, selectedFile: base64 });
          }}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
