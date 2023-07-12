import { Hero2 } from "../assets/images";
import { RiDeleteBin7Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <article className="mt-5 grid md:grid-cols-6 grid-cols-4 gap-4 items-center justify-between ">
      <div className="flex items-center gap-3 col-span-2">
        <div className="h-24 w-24 ">
          <img
            src={Hero2}
            alt="default-image"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div>
          <h4 className=" font-bold text-darkPurple">Modern Poster</h4>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Color:</span>
            <div className="bg-black h-3 w-3 md:h-4 md:w-4 rounded-sm"></div>
          </div>
          <p className="text-green font-bold block md:hidden">$30.99</p>
        </div>
      </div>
      <p className="text-green font-bold hidden md:block">$30.99</p>
      <div className="flex items-center font-bold gap-2 text-[1.2rem] md:text-base ">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <p className="text-redPink font-bold hidden md:block">$30.99</p>
      <div className="h-7 cursor-pointer w-7 md:w-10 md:h-10 bg-red-600 text-white flex items-center justify-center rounded-md">
        <RiDeleteBin7Line className="scale-[1.2]  " />
      </div>
    </article>
  );
};
export default CartItem;
