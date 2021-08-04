const postDetailReducer = (post = null, action) => {
  switch (action.type) {
    case "POST_DETAIL":
      return action.payload;
    default:
      return post;
  }
};
export default postDetailReducer;
