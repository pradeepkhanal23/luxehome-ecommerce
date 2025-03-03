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
  PaymentSuccessPage,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Testing from "./components/Testing";

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
        path: "testing",
        element: <Testing />,
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
      {
        path: "payment-success",
        element: <PaymentSuccessPage />,
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
