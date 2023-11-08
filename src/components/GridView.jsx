/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { BsSearch } from "react-icons/bs";
import React from "react";
import { useProductsContext } from "../context/productsContext";
// import { useImageBlur } from "../hooks/useImageBlur";
// import { useProgressiveImg } from "../hooks/useProgressiveImg";

const GridView = ({ products }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000); // 1000 milliseconds = 1 second

    // Clear the timeout if the component unmounts to avoid memory leaks.
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {products &&
        products.map((product) => {
          const { id, name, price, image } = product;

          return (
            <article
              className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 flex flex-col gap-3"
              key={id}
            >
              <div className="w-auto md:h-52 h-60 cursor-pointer relative">
                <Link to={`/products/${id}`}>
                  {!loading ? (
                    <img
                      src={image}
                      alt={name}
                      className={`h-full w-full object-cover rounded-lg  `}
                    />
                  ) : (
                    <div className="w-auto md:h-52 h-60 bg-gray-300 rounded-lg animate-pulse"></div>
                  )}

                  <div className="bg-[rgba(0,0,0,0.4)] text-whiteOrange rounded-lg opacity-0 flex items-center justify-center transition duration-300 ease-in-out hover:opacity-100 h-full w-full absolute inset-0 overflow-hidden bg-fixed">
                    <BsSearch className="scale-[3] " />
                  </div>
                </Link>
                <div className="flex justify-between text-sm  pb-5 ">
                  <p className="text-darkPurple capitalize">{name}</p>
                  <p className="text-green font-bold ">{formatPrice(price)}</p>
                </div>
              </div>
            </article>
          );
        })}
    </>
  );
};
export default GridView;
