/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { formatPrice } from "../utils/helpers";

const Product = ({ image, name, price, documentId }) => {
  return (
    <article className=" flex flex-col gap-5 cursor-pointer ">
      <Link to={`products/${documentId}`}>
        <div className="w-full h-64 relative">
          <img
            src={image}
            alt="featured"
            className="h-full w-full object-cover rounded-lg "
          />

          <div className="bg-[rgba(0,0,0,0.4)] text-whiteOrange rounded-lg opacity-0 flex items-center justify-center transition duration-300 ease-in-out hover:opacity-100 h-full w-full absolute inset-0 overflow-hidden bg-fixed">
            <BsSearch className="scale-[3] " />
          </div>
        </div>
      </Link>
      <footer className="flex justify-between text-sm px-3 pb-5">
        <h5 className="text-darkPurple capitalize">{name}</h5>
        <p className="text-green font-bold ">{formatPrice(price)}</p>
      </footer>
    </article>
  );
};
export default Product;
