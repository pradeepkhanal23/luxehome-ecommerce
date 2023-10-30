import { Link } from "react-router-dom";
import {
  PageHero,
  CartItem,
  CartReceipt,
  CartTitle,
  Modal,
} from "../components";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { useModalContext } from "../context/modalContext";

const CartPage = () => {
  const { cart } = useCartContext();
  const { loginWithRedirect, myUser } = useUserContext();
  const { modalOpen, openModal, closeModal } = useModalContext();

  if (cart.length === 0) {
    return (
      <section className="h-[calc(100vh-10rem)] max-w-[1000px] text-center mx-auto  flex flex-col items-center justify-center ">
        <h2 className="text-logoPurple text-base  uppercase font-bold mb-5">
          Your Cart is currently empty
        </h2>

        <div className="hover:scale-[1.1] transition-all ease-in-out">
          <Link to="/products" className="btn">
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
            <Link to="/products">
              <button className=" bg-logoPurple  shadow-lg text-white py-2 px-2 md:px-5 rounded-md">
                Continue Shopping
              </button>
            </Link>

            <button
              className="bg-red-600  shadow-lg text-white py-2 px-2 md:px-5 rounded-md"
              onClick={() => {
                openModal();
              }}
            >
              Clear Shopping Cart
            </button>
          </div>

          <CartReceipt />
          <div className="flex justify-end w-full ">
            {myUser ? (
              <Link
                to="/checkout"
                className="capitalize text-center text-sm py-3 md:py-2  w-full rounded-md md:w-1/2 btn"
              >
                Proceed to checkout
              </Link>
            ) : (
              <Link
                onClick={loginWithRedirect}
                className="capitalize text-center text-sm py-3 md:py-2  w-full rounded-md md:w-1/2 btn"
              >
                Login
              </Link>
            )}
          </div>
          {modalOpen && (
            <Modal
              closeModal={closeModal}
              message="Are you sure want to clear the cart?"
              title="Clear Cart"
            />
          )}
        </div>
      </section>
    </>
  );
};
export default CartPage;
