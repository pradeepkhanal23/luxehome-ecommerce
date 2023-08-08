import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { myUser } = useUserContext();
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [succeeded, setSucceeded] = useState(false);

  const paymentElementOptions = {
    layout: "tabs",
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:8888/checkout",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setMessage(error.message);
    } else {
      setSucceeded(true);
    }
  };

  return (
    <div className="flex h-[calc(100vh-20rem)] gap-y-5 flex-col justify-center items-center w-full">
      {succeeded ? (
        <article className=" w-[95%] max-w-lg mx-auto text-logoPurple font-bold capitalize md:text-base">
          <h4>Thank You for Shopping with us</h4>
          <h4>Your payment was successful!!</h4>
          <h4>Redirecting to home page shortly...</h4>
        </article>
      ) : (
        <article className=" w-[95%] max-w-lg mx-auto text-logoPurple ">
          <h4 className="text-base font-bold">Hello,{myUser?.given_name}</h4>
          <h4>
            Your total is:{" "}
            <span className="font-bold">
              {formatPrice(total_amount + shipping_fee)}
            </span>
          </h4>
          <br />
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}

      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="w-[95%] p-5 max-w-lg mx-auto shadow-regular  rounded-lg"
      >
        <PaymentElement paymentElementOptions={paymentElementOptions} />
        <button
          disabled={!stripe}
          className="mt-3 bg-logoPurple text-white px-6 py-1 rounded-md"
        >
          Submit
        </button>
        {/* Show error message to your customers */}
        {message && <div className="text-red-600">{message}</div>}
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { cart, total_amount, shipping_fee } = useCartContext();

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, total_amount, shipping_fee })
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};
export default StripeCheckout;
