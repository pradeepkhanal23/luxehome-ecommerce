import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useCartContext } from "../context/cartContext";
import { formatPrice } from "../utils/helpers";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = () => {
  const { cart, removeItem, toggleAmount, total_amount } = useCartContext();

  const increase = (id, value) => {
    toggleAmount(id, value);
  };
  const decrease = (id, value) => {
    toggleAmount(id, value);
  };

  const notify = () => {
    toast.error("Item deleted succesfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
      icon: false,
      pauseOnFocusLoss: false,
      autoClose: 1000,
    });
  };

  return (
    <>
      {cart.map((item) => {
        const { name, id, price, image, amount, color } = item;

        return (
          <article
            key={id}
            className="mt-5 grid md:grid-cols-6 grid-cols-4 gap-4 items-center justify-between "
          >
            <div className="flex items-center gap-3 col-span-2">
              <div className="h-24 w-24 ">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div>
                <h4 className=" font-bold text-darkPurple capitalize">
                  {name}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Color:</span>
                  <div
                    className=" h-3 w-3 md:h-4 md:w-4 rounded-sm"
                    style={{ background: color }}
                  ></div>
                </div>
                <p className="text-green font-bold block md:hidden">
                  {formatPrice(price)}
                </p>
              </div>
            </div>
            <p className="text-green font-bold hidden md:block">
              {formatPrice(price)}
            </p>
            <div className="flex items-center font-bold gap-2 text-[1.3rem]  ">
              <AiOutlineMinus
                className="cursor-pointer"
                onClick={() => increase(id, "decrease")}
              ></AiOutlineMinus>
              <span>{amount}</span>
              <AiOutlinePlus
                className="cursor-pointer"
                onClick={() => decrease(id, "increase")}
              ></AiOutlinePlus>
            </div>
            <p className="text-redPink font-bold hidden md:block">
              {formatPrice(price * amount)}
            </p>
            <div
              className="h-7 cursor-pointer w-7 md:w-10 md:h-10 bg-red-600 text-white flex items-center justify-center rounded-md"
              onClick={() => {
                removeItem(id);
                notify();
              }}
            >
              <RiDeleteBin7Line className="scale-[1.2]" />
              <ToastContainer limit={5} />
            </div>
          </article>
        );
      })}
    </>
  );
};
export default CartItem;
