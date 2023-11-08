/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line react/prop-types
const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;
  const { addToCart } = useCartContext();
  const [primaryColor, setPrimaryColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const notification = () => {
    toast.success("Item added to the cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
    });
  };

  const increase = () => {
    if (amount < stock) {
      setAmount((prevAmount) => {
        return prevAmount + 1;
      });
    }
  };
  const decrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => {
        return prevAmount - 1;
      });
    }
  };

  return (
    <>
      <div className=" w-[80%]">
        <div className="grid grid-cols-2 items-center ">
          <span className="text-logoPurple text-sm font-bold self-start">
            Colors:
          </span>
          <div className="flex gap-2">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    primaryColor === color
                      ? "h-5 w-5 rounded-full  opacity-100  "
                      : "h-5 w-5 rounded-full  opacity-50 "
                  }`}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => {
                    setPrimaryColor(color);
                  }}
                >
                  {primaryColor === color && <BsCheck className="text-white" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-logoPurple flex gap-2 items-center text-base  ">
        <button
          className=" border border-logoPurple p-1 rounded-l-lg "
          onClick={decrease}
        >
          <AiOutlineMinus />
        </button>

        <span className=" text-lg mx-1 font-bold text-center w-8 ">
          {amount}
        </span>

        <button
          className=" border border-logoPurple p-1 rounded-r-lg "
          onClick={increase}
        >
          <AiOutlinePlus />
        </button>
        {amount === stock && (
          <span className="text-red-500 text-sm ml-2 font-bold">
            Maximum limit reached!!
          </span>
        )}
      </div>
      <div
        className="btn w-40 text-sm mt-1"
        onClick={() => {
          notification();
          addToCart(id, primaryColor, amount, product);
        }}
      >
        <Link
        // to="/cart"
        >
          Add to Cart
        </Link>
        <ToastContainer />
      </div>
    </>
  );
};
export default AddToCart;
