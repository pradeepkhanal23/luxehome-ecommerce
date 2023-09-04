/* eslint-disable react/prop-types */

import { formatPrice } from "../utils/helpers";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useProductsContext } from "../context/productsContext";

const ListView = ({ products }) => {
  const { productsLoading: loading } = useProductsContext();

  if (loading) {
    return (
      <>
        <article
          className="col-span-12 md:col-span-12 md:flex-row flex flex-col gap-3"
          key="loading-skeleton"
        >
          <div className="w-auto md:h-52 h-60 md:w-96 relative cursor-pointer">
            <div className="animate-pulse bg-gray-300 h-full w-full object-cover rounded-lg"></div>
          </div>
          <div className="flex flex-col gap-2 justify-between md:w-full text-sm pb-5 md:gap-1">
            <div className="animate-pulse bg-gray-300 h-6 w-4/5"></div>
            <div className="animate-pulse bg-gray-300 h-5 w-2/4"></div>
            <div className="animate-pulse bg-gray-300 h-4 w-3/4"></div>
            <div className="animate-pulse bg-gray-300 h-8 w-20"></div>
          </div>
        </article>
      </>
    );
  }
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
                {description.substring(0, 150)}...
              </p>
              <Link
                to={`/products/${id}`}
                className=" w-28 bg-logoPurple text-white py-1 px-4 rounded-sm text-center"
              >
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default ListView;
