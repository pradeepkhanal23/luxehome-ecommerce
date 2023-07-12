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
      <div className="flex gap-2 items-center">
        <Stars stars={stars} />
        <div>
          <p className="text-sm text-darkBlue">
            (<span>{reviews}</span> customers reviews)
          </p>
        </div>
      </div>
      <h5 className="font-bold text-green">{formatPrice(price)}</h5>
      <p className="text-sm text-darkBlue tracking-tight text-justify">
        {description}
      </p>
      <div className="grid grid-cols-2  w-[80%] text-sm">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-logoPurple font-bold self-start">
            Available:
          </span>
          <span className="text-logoPurple font-bold self-start">SKU:</span>
          <span className="text-logoPurple font-bold self-start">Brand:</span>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <span className="self-start text-redPink capitalize">
            {stock > 0 ? "in stock" : "out of stock"}
          </span>
          <span className="self-start text-redPink">{sku}</span>
          <span className="self-start text-redPink capitalize">{company}</span>
        </div>
      </div>
      <div className="h-[2px] mx-auto  w-full bg-gray-300 my-1"></div>
    </>
  );
};
export default ProductInfo;
