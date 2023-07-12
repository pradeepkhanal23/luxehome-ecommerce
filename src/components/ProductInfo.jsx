import { Stars } from "../components";

const ProductInfo = () => {
  return (
    <>
      <h2 className="text-darkPurple text-lg font-bold uppercase">
        Modern Poster
      </h2>
      <div className="flex gap-2 items-center">
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <div>
          <p className="text-sm text-darkBlue">
            (<span>19</span> customers reviews)
          </p>
        </div>
      </div>
      <h5 className="font-bold text-green">$399.99</h5>
      <p className="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        debitis voluptates suscipit in sapiente doloribus tenetur tempora
        corporis quidem est, dolorum nam voluptatum facilis nulla eaque ducimus.
        In, repellat nostrum.
      </p>
      <div className="grid grid-cols-2  w-[80%] ">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-logoPurple font-bold self-start">
            Available:
          </span>
          <span className="text-logoPurple font-bold self-start">SKU:</span>
          <span className="text-logoPurple font-bold self-start">Brand:</span>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <span className="self-start text-redPink">In Stock</span>
          <span className="self-start text-redPink">Res5Hsbah5gsa</span>
          <span className="self-start text-redPink">Ikea</span>
        </div>
      </div>
      <div className="h-[2px] mx-auto  w-full bg-gray-300 my-1"></div>
    </>
  );
};
export default ProductInfo;
