import { OWN_POSTS } from "../constants/actionTypes";

const ownPostsReducer = (posts = [], action) => {
  switch (action.type) {
    case OWN_POSTS:
      return action.payload;
    default:
      return posts;
  }
};
export default ownPostsReducer;
