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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
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
