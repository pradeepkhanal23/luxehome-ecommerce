const PaymentSuccessPage = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-green-100">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <svg
            className="w-24 h-24 mx-auto text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="text-3xl font-semibold text-green-600 mt-6">
            Payment Successful!
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Thank you for your order. We’ve received your payment and will
            process your order shortly.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="text-white bg-green-600 hover:bg-green-700 font-medium py-2 px-4 rounded-full"
            >
              Return to Homepage
            </a>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-gray-500">
              If you have any questions, feel free to contact us at{" "}
              <a
                href="mailto:orders@example.com"
                className="text-blue-500 hover:text-blue-700"
              >
                orders@example.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccessPage;
