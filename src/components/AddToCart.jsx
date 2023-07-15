/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;

  const [primaryColor, setPrimaryColor] = useState(colors[0]);

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
      <div className="text-logoPurple flex gap-3 items-center text-base  ">
        <button className=" border border-black  px-3 rounded-l-lg">-</button>
        <span className=" text-lg font-bold ">1</span>
        <button className=" border border-black  px-3 rounded-r-lg">+</button>
      </div>
      <Link to="/cart" className="btn w-40 text-sm mt-1">
        Add to Cart
      </Link>
    </>
  );
};
export default AddToCart;
