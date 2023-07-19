const CartTitle = () => {
  return (
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
  );
};
export default CartTitle;
