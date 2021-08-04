import React, { useEffect, useState } from "react";
import logo from "../../images/storybook-logo.png";
import decode from "jwt-decode";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
const NavBar = () => {
  //TODO: Move the user state into redux store to update
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  useEffect(() => {
    const token = user?.token;
    //JWT here
    if (token) {
      const decoded = decode(token);
      if (decoded.exp * 1000 < new Date().getTime()) {
        dispatch({ type: "LOGOUT" });
        history.push("/session-expired");
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <nav>
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="storybook logo" />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/stories" className="link">
            Stories
          </NavLink>
        </li>
        <li>
          <a href="#!" className="link">
            About
          </a>
        </li>
        <li className="signin">
          {user?.result ? (
            <NavLink to="/profile">{user.result.name}</NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
