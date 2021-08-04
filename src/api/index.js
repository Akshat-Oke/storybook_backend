import axios from "axios";

const API = axios.create({ baseURL: "https://storybook-site.herokuapp.com" });

// const url = "http://localhost:5000/posts";

API.interceptors.request.use((req) => {
  console.log("API int");
  const profile = localStorage.getItem("profile");
  if (profile) {
    req.headers.authorization = `Bearer ${JSON.parse(profile).token}`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);

export const updatePost = (id, newPost) => API.patch(`/posts/${id}`, newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const findPost = (id) => API.get(`/posts/find/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const ownPosts = () => API.get("/posts/own");
