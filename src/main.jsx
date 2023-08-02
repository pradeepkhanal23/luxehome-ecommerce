import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/productsContext.jsx";
import FilterProvider from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import UserProvider from "./context/userContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthWrapper } from "./pages/index.jsx";

//dev-exs8rhtwcmvakpxh.au.auth0.com

//8Udq0tz6dl8llq5RrXr2NW2e3yD7Ot5R

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <AuthWrapper>
        <UserProvider>
          <ProductsProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>
          </ProductsProvider>
        </UserProvider>
      </AuthWrapper>
    </Auth0Provider>
  </React.StrictMode>
);
