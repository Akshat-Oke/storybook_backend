import * as api from "../api";
import { OWN_POSTS } from "../constants/actionTypes";
//Action creator
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const findPost = (id, postAvailable) => {
  if (postAvailable) return { type: "POST_DETAIL", payload: postAvailable };
  return async (dispatch) => {
    try {
      const { data } = await api.findPost(id);
      dispatch({ type: "POST_DETAIL", payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (e) {
    console.log(e);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id); // no use for the response.data from out api
    dispatch({ type: "DELETE", payload: id });
  } catch (e) {
    console.log(e);
  }
};

export const getOwnPosts = () => async (dispatch) => {
  try {
    const { data } = await api.ownPosts();
    console.log("data is ", data);

    dispatch({ type: OWN_POSTS, payload: data });
  } catch (e) {
    console.log(e);
  }
};
