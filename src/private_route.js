import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  function isAuthenticated() {
    //====== your token from local storage here (1)====
    const token = localStorage.getItem('token');
    // ====check if the token exists and is valid=====
    let check  = token ? true : false;
    return check;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;