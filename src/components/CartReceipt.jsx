const CartReceipt = () => {
  return (
    <>
      <article className="flex flex-row justify-end ">
        <div className="border border-gray-300 w-full md:w-1/2 flex flex-col gap-3">
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
          <div className="h-[2px] mx-auto block w-[80%]  bg-gray-300 "></div>
          <div className="flex font-bold text-base items-center justify-around md:px-0  px-10 md:w-2/3 mx-auto py-5">
            <span>Order Total :</span>
            <h4>$36.98</h4>
          </div>
        </div>
      </article>
    </>
  );
};
export default CartReceipt;
