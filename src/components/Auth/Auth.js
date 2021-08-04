import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Button from "../Button/Button";
import Hero from "../Hero/Hero";
import { useDispatch } from "react-redux";
import "./auth.css";
import TextInput from "../Inputs/Input";
import { useHistory } from "react-router-dom";
import { signup, signin } from "../../actions/auth";
const initialStateForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialStateForm);
  const params = props.location.search;
  const switchModes = () => {
    setIsSignUp(!isSignUp);
  };
  // const isSignUp = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asd");
    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(res);
    try {
      dispatch({
        type: "AUTH",
        payload: {
          result,
          token,
        },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("failed google sign in");
  };
  return (
    <div className="auth-container">
      <Hero heading={isSignUp ? "Sign Up" : "Sign In"} small />
      {/* <div className="auth-header">{isSignUp ? "Sign Up" : "Sign In"}</div> */}
      {params ? (
        <>
          <h3>You need to login first</h3>
          <br />
        </>
      ) : null}
      <form className="auth-form" onSubmit={handleSubmit}>
        <TextInput name="name" placeholder="Name" onChange={handleChange} />
        <TextInput
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <TextInput
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        {isSignUp ? (
          <TextInput
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            onChange={handleChange}
          />
        ) : null}
        <GoogleLogin
          clientId="171848251772-u3bk68fedd2uditbs17q4v7dbh5q8opq.apps.googleusercontent.com"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        <Button type="submit" onClick={() => {}}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <Button type="button" onClick={switchModes}>
          Switch sign
        </Button>
      </form>
    </div>
  );
};

export default Auth;
