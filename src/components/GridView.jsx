/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { BsSearch } from "react-icons/bs";
import { useProductsContext } from "../context/productsContext";

const GridView = ({ products }) => {
  const { productsLoading: loading } = useProductsContext();

  if (loading) {
    return (
      <>
        {products.map((product) => {
          return (
            <article
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col gap-3"
              key={product.id}
            >
              <div className="w-auto md:h-52 h-60 relative">
                <div className="animate-pulse bg-gray-300 h-full w-full object-cover rounded-lg"></div>
              </div>
              <div className="flex justify-between text-sm pb-5">
                <div className="animate-pulse bg-gray-300 h-6 w-1/4 rounded"></div>
                <div className="animate-pulse bg-gray-300 h-6 w-1/4 rounded"></div>
              </div>
            </article>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {products.map((product) => {
          const { id, name, price, image } = product;
          return (
            <article
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col gap-3"
              key={id}
            >
              <div className="w-auto md:h-52 h-60 cursor-pointer relative">
                <Link to={`/products/${id}`}>
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover rounded-lg "
                  />

                  <div className="bg-[rgba(0,0,0,0.4)] text-whiteOrange rounded-lg opacity-0 flex items-center justify-center transition duration-300 ease-in-out hover:opacity-100 h-full w-full absolute inset-0 overflow-hidden bg-fixed">
                    <BsSearch className="scale-[3] " />
                  </div>
                </Link>
              </div>
              <div className="flex justify-between text-sm  pb-5">
                <p className="text-darkPurple capitalize">{name}</p>
                <p className="text-green font-bold ">{formatPrice(price)}</p>
              </div>
            </article>
          );
        })}
      </>
    );
  }
};
export default GridView;
