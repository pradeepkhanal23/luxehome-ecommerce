import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <section className="h-screen max-w-[1000px] text-center mx-auto  flex flex-col items-center justify-center">
        <h2 className="text-logoPurple text-base  uppercase font-bold mb-5">
          Your Cart is currently empty
        </h2>

        <div className="hover:scale-[1.1] transition-all ease-in-out">
          <Link
            to="/products"
            className="bg-logoPurple text-white py-2 px-6  rounded-md"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero title="checkout" />
      <StripeCheckout />
    </>
  );
};
export default CheckoutPage;
