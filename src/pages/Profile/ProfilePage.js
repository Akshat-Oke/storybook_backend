import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";
import TextInput from "../../components/Inputs/Input";
import OwnPosts from "../../components/OwnPosts/OwnPosts";
import { useAuth } from "../../hooks/auth";
import "./profile.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  useAuth();
  const history = useHistory();
  return (
    <div className="profile-page">
      <Hero small heading="Profile" />
      <div className="profile-wrapper">
        <div className="profile__container">
          <TextInput placeholder="Name" />
          <TextInput placeholder="Email" type="email" />
        </div>
        <div className="profile__container">
          <Button
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              history.push("/");
            }}
          >
            Logout
          </Button>
          <Link to="/create-story">
            <Button onClick={() => {}}>Create your story</Button>
          </Link>
          {/* <Button
        
          onClick={() => {
            dispatch({ type: "LOGOUT" });
            history.push("/");
          }}
        >
          Logout
        </Button> */}
        </div>
        <OwnPosts />
      </div>
    </div>
  );
};

export default ProfilePage;
