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
import { ModalProvider } from "./context/modalContext.jsx";
import { SupabaseProvider } from "./context/supabaseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <SupabaseProvider>
        <AuthWrapper>
          <UserProvider>
            <ProductsProvider>
              <FilterProvider>
                <CartProvider>
                  <ModalProvider>
                    <App />
                  </ModalProvider>
                </CartProvider>
              </FilterProvider>
            </ProductsProvider>
          </UserProvider>
        </AuthWrapper>
      </SupabaseProvider>
    </Auth0Provider>
    {/* <Testing /> */}
  </React.StrictMode>
);
