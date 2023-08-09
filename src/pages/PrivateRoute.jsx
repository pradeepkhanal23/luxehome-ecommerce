/* eslint-disable react/prop-types */
// PrivateRoute.js

import { useAuth0 } from "@auth0/auth0-react";
import HomePage from "./HomePage";

const PrivateRoute = ({ children }) => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return children;
  }
  if (isAuthenticated) {
    return (
      <>
        <HomePage />
      </>
    );
  }
};

export default PrivateRoute;
