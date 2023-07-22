import { Link } from "react-router-dom";
import { PageHero, CartItem, CartReceipt, CartTitle } from "../components";
import { useCartContext } from "../context/cartContext";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <section className="h-[calc(100vh-10rem)] max-w-[1000px] text-center mx-auto  flex flex-col items-center justify-center">
        <h2 className="text-redPink text-base  uppercase font-bold mb-5">
          Your Cart is currently empty
        </h2>

        <div className="hover:scale-[1.1] transition-all ease-in-out">
          <Link
            to="/products"
            className="bg-logoPurple text-white py-2 px-6 md:text-base rounded-md"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero title="Cart" />
      <section>
        <div className="wrapper grid grid-cols-1 gap-5 max-w-[1400px] mx-auto p-5 ">
          <CartTitle />
          <div className="h-[2px] mx-auto hidden md:block w-full bg-gray-300 my-1"></div>
          <CartItem />
          <div className="h-[2px] mx-auto block w-full  bg-gray-300 my-5"></div>
          <div className="flex items-center justify-between gap-2">
            <button className=" bg-logoPurple  shadow-lg text-white py-2 px-2 md:px-5 rounded-md">
              Continue Shopping
            </button>
            <button className="bg-red-600  shadow-lg text-white py-2 px-2 md:px-5 rounded-md">
              Clear Shopping Cart
            </button>
          </div>
          <CartReceipt />
          <div className="flex justify-end w-full ">
            <button className="capitalize md:text-base py-2 w-full rounded-md md:w-1/2 btn">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartPage;
