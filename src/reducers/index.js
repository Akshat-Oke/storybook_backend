import { combineReducers } from "redux";
import posts from "./posts";
import postDetail from "./findpost";
import auth from "./auth";
import ownPosts from "./ownPosts";
export default combineReducers({
  posts,
  postDetail,
  auth,
  ownPosts,
});
