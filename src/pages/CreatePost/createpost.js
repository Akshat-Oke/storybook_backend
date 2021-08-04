import React from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router";
import Form from "../../components/Form/Form";

import { useAuth } from "../../hooks/auth";
import "./createpost.css";
const CreatePost = ({ post = null }) => {
  const { path } = useRouteMatch();
  useAuth();
  return (
    <div className="create-post">
      <Switch>
        <Route exact path={path}>
          <Form post={null} />
        </Route>
        <Route path={`${path}/:postId`}>
          <Form post={post} />
        </Route>
      </Switch>
    </div>
  );
};

export default CreatePost;
