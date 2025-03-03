/* eslint-disable react/prop-types */
import { Stars } from "../components";
import { formatPrice } from "../utils/helpers";

const ProductInfo = ({ product }) => {
  const {
    name,
    price,
    description,
    stock,
    stars,
    id: sku,
    company,
    reviews,
  } = product;

  return (
    <>
      <h2 className="text-darkPurple text-lg font-bold uppercase">{name}</h2>
      <Stars stars={stars} reviews={reviews} />
      <h5 className="font-bold text-green">{formatPrice(price)}</h5>
      <p className="text-sm text-logoPurple mb-1  tracking-tight leading-normal text-justify">
        {description}
      </p>
      <div className="grid grid-cols-2  w-[80%] text-sm">
        <div className="flex flex-col gap-2 items-center text-logoPurple font-bold">
          <span className="self-start">Available:</span>
          <span className="self-start">SKU:</span>
          <span className="self-start">Brand:</span>
        </div>
        <div className=" flex flex-col items-center gap-2 text-logoPurple">
          <span className="self-start  capitalize ">
            {stock > 0 ? (
              "in stock"
            ) : (
              <span className="font-bold text-red-500 capitalize">
                out of stock
              </span>
            )}
          </span>
          <span className="self-start ">{sku}</span>
          <span className="self-start  capitalize">{company}</span>
        </div>
      </div>
      <div className="h-[2px] mx-auto  w-full bg-gray-300 my-1"></div>
    </>
  );
};
export default ProductInfo;
