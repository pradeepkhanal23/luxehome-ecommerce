/* eslint-disable react/prop-types */

// import { SkeletonLoader } from "../components";
import { BsSearch } from "react-icons/bs";

const Product = ({ image, name, price }) => {
  return (
    <article className=" flex flex-col gap-5 cursor-pointer ">
      <div className="w-full h-64 relative">
        <img
          src={image}
          alt="featured"
          className="h-full w-full object-cover rounded-lg shadow-lg"
        />

        <div className="bg-[rgba(0,0,0,0.4)] text-whiteOrange rounded-lg opacity-0 flex items-center justify-center transition duration-300 ease-in-out hover:opacity-100 h-full w-full absolute inset-0 overflow-hidden bg-fixed">
          <BsSearch className="scale-[3] " />
        </div>
      </div>
      <footer className="flex justify-between text-sm px-3 pb-5">
        <h5 className="text-darkPurple capitalize">{name}</h5>
        <p className="text-green font-bold ">${price}</p>
      </footer>
      {/* <SkeletonLoader /> */}
    </article>
  );
};
export default Product;

//  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[rgba(0,0,0,0.6)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>;
