const postReducer = (posts = [], action) => {
  // action is the new post/updated post
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
    //for DELETE we get the id as payload instead
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      ); //replace old post with new
    default:
      return posts;
  }
};
export default postReducer;
