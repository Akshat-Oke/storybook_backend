import React from "react";
import moment from "moment";
import { deletePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./post.css";
import Button from "../../Button/Button";
const Post = ({ post, showActions = false }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getMessage = (m) => {
    return m.substring(0, 80) + (m.length > 80 ? " ..." : "");
  };
  const readMore = () => history.push(`/story/${post._id}`);
  return (
    <div className="card">
      <div className="post__header">
        <div className="post__header__image">
          {post.selectedFile?.base64 ? (
            <img src={post.selectedFile.base64} alt="post" />
          ) : null}
        </div>
        <div className="post__header__title" onClick={readMore}>
          {post.title}
        </div>
      </div>
      <div className="post__body">
        <div className="post__message">{getMessage(post.message)}</div>
        <div className="post__data">
          {!showActions && (
            <span className="post__author">
              By {post.creator?.name ?? "Unknown"}
            </span>
          )}
          <time dateTime={post.createdAt.toString()}>
            {moment(post.createdAt).fromNow()}
          </time>
        </div>
        {showActions && (
          <div className="post__actions">
            {/* <Button
              // onClick={() => {
              //   // setCurrentId(post._id);
              //   history.push("/create-story/"+ )
              // }}
            >
              Edit
            </Button> */}
            <Link to={"/create-story/" + post._id}>Edit</Link>
            <Button
              onClick={() => {
                dispatch(deletePost(post._id));
              }}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
