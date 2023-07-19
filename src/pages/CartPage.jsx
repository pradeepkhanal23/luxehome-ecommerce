import { Link } from "react-router-dom";
import { PageHero, CartItem, CartReceipt, CartTitle } from "../components";
import { useCartContext } from "../context/cartContext";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 0) {
    return (
      <>
        <h2>Your Cart is currently empty</h2>
        <Link to="/products">Start Shopping</Link>
      </>
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
            <button className=" bg-logoPurple  shadow-lg text-white py-2 px-2 md:px-5 rounded-sm">
              Continue Shopping
            </button>
            <button className="bg-red-600  shadow-lg text-white py-2 px-2 md:px-5 rounded-sm">
              Clear Shopping Cart
            </button>
          </div>
          <CartReceipt />
          <div className="flex justify-end w-full ">
            <button className="capitalize md:text-base w-full rounded-sm md:w-1/2 btn">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartPage;
