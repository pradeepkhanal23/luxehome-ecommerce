import { RootLayout } from "./components";
import {
  Error,
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  PrivateRoute,
  Checkout,
  AuthWrapper,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      // Use PrivateRoute for the checkout page
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </>
  );
}

export default App;
