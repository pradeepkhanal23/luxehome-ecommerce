/* eslint-disable react/prop-types */

import { formatPrice } from "../utils/helpers";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  const truncateText = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };
  return (
    <>
      {products.map((product) => {
        const { image, id, name, price, description } = product;

        return (
          <article
            className="col-span-12 md:col-span-12 md:flex-row  flex flex-col gap-3"
            key={id}
          >
            <div className="w-auto md:h-52 h-60 md:w-96 relative cursor-pointer">
              <Link to={`/products/${id}`}>
                <img
                  src={image}
                  alt="featured"
                  className="h-full w-full object-cover rounded-lg "
                />

                <div className="bg-[rgba(0,0,0,0.4)] text-whiteOrange rounded-lg opacity-0 flex items-center justify-center transition duration-300 ease-in-out hover:opacity-100 h-full w-full absolute inset-0 overflow-hidden bg-fixed">
                  <BsSearch className="scale-[3] " />
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2 justify-between md:w-full text-sm  pb-5 md:gap-1 ">
              <h4 className="text-darkPurple text-base capitalize">{name}</h4>
              <p className="text-green font-bold tracking-wider ">
                {formatPrice(price)}
              </p>
              <p className="text-gray-700 tracking-tight  md:w-[90%]">
                {truncateText(description, 150)}
              </p>
              <button className="btn w-32 ">Details</button>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default ListView;
