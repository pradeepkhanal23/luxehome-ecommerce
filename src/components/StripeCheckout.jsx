const CheckoutForm = () => {
  return (
    <form className="flex h-[calc(100vh-20rem)] items-center justify-center w-full text-logoPurple ">
      <h2>Hello from the stripe checkout form</h2>
    </form>
  );
};

const StripeCheckout = () => {
  return (
    <>
      <CheckoutForm />
    </>
  );
};
export default StripeCheckout;
