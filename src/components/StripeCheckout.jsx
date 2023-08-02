import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  //custom state values from our context
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { user } = useUserContext();

  //Stripe state control values
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  return (
    <form className="flex h-[calc(100vh-20rem)] items-center justify-center w-full text-logoPurple ">
      <h2>Hello from the stripe checkout form</h2>
    </form>
  );
};

const StripeCheckout = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};
export default StripeCheckout;
