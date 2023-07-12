const AddToCart = () => {
  return (
    <>
      <div className=" w-[80%]">
        <div className="grid grid-cols-2 items-center ">
          <span className="text-logoPurple text-sm font-bold self-start">
            Colors:
          </span>
          <div className="flex gap-1">
            <div className="h-5 w-5 rounded-full bg-green"></div>
            <div className="h-5 w-5 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
      <div className="text-logoPurple flex items-center text-base  ">
        <button className="mr-5">-</button>
        <span className="mr-5 text-lg font-bold">1</span>
        <button className="mr-5">+</button>
      </div>
      <button className="btn w-40 text-sm">Add to Cart</button>
    </>
  );
};
export default AddToCart;
