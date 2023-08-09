/* eslint-disable react/prop-types */
import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-sweetOrange"></div>
      </div>
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return <>{children}</>;
};
export default AuthWrapper;
