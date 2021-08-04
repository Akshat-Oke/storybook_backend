import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Home from "./pages/Home/Home";
import "./css/components.css";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stories from "./pages/Stories/Stories";
import StoryDetailPage from "./pages/StoryDetail/StoryDetailPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import Auth from "./components/Auth/Auth";
import CreatePost from "./pages/CreatePost/createpost";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/story/:id" component={StoryDetailPage} />
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/auth" component={Auth} />
          <Route path="/create-story" component={CreatePost} />
          <Route path="/create-story/:id" component={CreatePost} />
          <Route path="/session-expired">
            <div style={{ height: "100vh", color: "red" }}>
              <br />
              <br />
              <br />
              <br />
              <br />
              Your session has expired. Login again to continue.
              <Link to="auth" style={{ color: "blue" }}>
                Login
              </Link>
            </div>
          </Route>
          <Route path="*" exact={true}>
            <div style={{ height: "100px" }}></div>
            The page you are trying to access does not exist!
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
