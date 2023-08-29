require("dotenv").config();

const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "aud",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ error: "event not recieved" }),
  };
};
