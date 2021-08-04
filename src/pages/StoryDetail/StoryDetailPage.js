import React, { useCallback, useEffect, useRef } from "react";
import "./storydetailpage.css";
import { useDispatch, useSelector } from "react-redux";
import { findPost } from "../../actions/posts";
import Loader from "../../components/Loader";
import moment from "moment";

const StoryDetailPage = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id.trim();
  const findThePost = useCallback(
    (state) => {
      console.log("postDetail", state.postDetail);
      console.log("postDetail id = ", state.postDetail?._id);
      if (id) {
        if ((state.posts || state.ownPosts) && state.postDetail?._id !== id) {
          var foundPost = state.posts.find((p) => p._id === id);
          if (foundPost) {
            dispatch(findPost(id, foundPost));
          } else {
            foundPost = state.ownPosts.find((p) => p._id === id);
            if (foundPost) {
              dispatch(findPost(id, foundPost));
            } else dispatch(findPost(id, false));
          }
        } else if (state.postDetail?._id !== id) {
          dispatch(findPost(id, false));
        }
      }
      return state.postDetail;
    },
    [id, dispatch]
  );

  // useEffect(() => {
  //   findThePost();
  // }, [findThePost]);
  const post = useSelector(findThePost);
  return (
    <div className="story-detail-page">
      {post ? <ThePage post={post} /> : <Loader />}
    </div>
  );
};

export default StoryDetailPage;

const ThePage = ({ post }) => {
  const ref = useRef();
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".story-detail-page__heading",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  //   tl.to(
  //     ".js-slow",
  //     {
  //       // y: ref.current.offsetHeight * 0.1,
  //       y: 10,
  //       ease: "none",
  //     },
  //     0
  //   );
  // }, []);
  return (
    <>
      <div className="story-detail-page__heading" ref={ref}>
        <div className="story-detail-page__heading__data js-slow">
          <h2>{post.title}</h2>
          <span className="post__author">
            By {post.creator?.name ?? "Unknown"}
          </span>
          <br />
          <time dateTime={post.createdAt.toString()}>
            {moment(post.createdAt).fromNow()}
          </time>
        </div>
        {post.selectedFile?.base64 ? (
          <img
            className="js-slow"
            src={post.selectedFile.base64}
            alt={post.title}
          />
        ) : null}
      </div>
      <div className="story-detail-page__message">{post.message}</div>
    </>
  );
};
