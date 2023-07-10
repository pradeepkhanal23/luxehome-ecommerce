import { PageHero } from "../components";
import defaultImage from "../assets/hero2.jpg";
import { RiDeleteBin7Line } from "react-icons/ri";
const CartPage = () => {
  return (
    <>
      <PageHero title="Cart" />
      <section>
        <div className="wrapper grid grid-cols-1 gap-5 max-w-[1600px] mx-auto p-5 ">
          <div className="md:grid hidden grid-cols-6 gap-4">
            <div className="col-span-2">
              <h2 className="font-bold">Item</h2>
            </div>
            <div>
              <h2 className="font-bold">Price</h2>
            </div>
            <div>
              <h2 className="font-bold">Quantity</h2>
            </div>
            <div>
              <h2 className="font-bold">Subtotal</h2>
            </div>
          </div>
          <div className="h-[2px] mx-auto hidden md:block w-full bg-gray-300 my-1"></div>
          <article className="mt-5 grid md:grid-cols-6 grid-cols-4 gap-4 items-center justify-between ">
            <div className="flex items-center gap-3 col-span-2">
              <div className="h-24 w-24 ">
                <img
                  src={defaultImage}
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
          <div className="h-[2px] mx-auto block w-full  bg-gray-300 my-5"></div>
          <div className="flex items-center justify-between gap-2">
            <button className=" bg-logoPurple  shadow-lg text-white py-2 px-2 rounded-sm">
              Continue Shopping
            </button>
            <button className="bg-red-500  shadow-lg text-white py-2 px-2 rounded-sm">
              Clear Shopping Cart
            </button>
          </div>
          <div className="border border-gray-300 w-1/2 mx-auto">
            <div className="grid grid-cols-2  px-10 py-5">
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold">Subtotal:</span>
                <span>Shipping Fee:</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h4 className="font-bold">$30.99</h4>
                <h4>$3.5</h4>
              </div>
            </div>
            <div className="h-[2px] mx-auto block w-2/3  bg-gray-300 "></div>
            <div className="flex font-bold text-lg items-center justify-between px-10 w-2/3 mx-auto  py-5">
              <span>Order Total :</span>
              <h4>$36.98</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartPage;
