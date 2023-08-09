/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const [myUser, setMyUser] = React.useState(null);

  React.useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
