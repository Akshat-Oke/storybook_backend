import { AUTH } from "../constants/actionTypes";
import * as api from "../api";
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", payload: data });
    history.push("/signedup");
  } catch (e) {}
};
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", payload: data });
    history.push("/signedin");
  } catch (e) {}
};
export const googleSignIn = (result, token, history) => async (dispatch) => {
  //TODO: here
};
