import { PageHero, CartItem, CartReceipt } from "../components";

const CartPage = () => {
  return (
    <>
      <PageHero title="Cart" />
      <section>
        <div className="wrapper grid grid-cols-1 gap-5 max-w-[1400px] mx-auto p-5 ">
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
          <CartItem />
          <div className="h-[2px] mx-auto block w-full  bg-gray-300 my-5"></div>
          <div className="flex items-center justify-between gap-2">
            <button className=" bg-logoPurple  shadow-lg text-white py-2 px-2 md:px-5 rounded-sm">
              Continue Shopping
            </button>
            <button className="bg-red-500  shadow-lg text-white py-2 px-2 md:px-5 rounded-sm">
              Clear Shopping Cart
            </button>
          </div>
          <CartReceipt />
          <div className="flex justify-end w-full ">
            <button className="capitalize md:text-base w-full rounded-sm md:w-1/2 btn">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartPage;
