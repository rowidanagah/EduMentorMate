import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const requireAuth = (Component) => {
  const isAuthenticated =
    localStorage.getItem("token"); /* add your authentication logic here */
  console.log("----------------------", isAuthenticated);

  const AuthenticatedComponent = (props) => {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/register" />;
    }
  };

  return AuthenticatedComponent;
};

export default requireAuth;
