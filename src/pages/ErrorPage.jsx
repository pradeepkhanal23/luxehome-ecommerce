import { useRouteError } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <section
        id="error-page"
        className="flex flex-col items-center justify-center w-screen h-auto mt-5 md:mt-10 p-5 text-center text-base font-bold text-red-600 bg-bodyBackground"
      >
        <h1 className="text-2xl">{error.status}</h1>
        <h3>Sorry, an unexpected error has occurred.</h3>
        <p>
          <i>{error.data}</i>
        </p>
        <Link
          to="./"
          className="bg-logoPurple text-white py-1 px-6 rounded-md mt-3 cursor-pointer hover:scale-110 hover:transition hover:ease-in-out"
        >
          Back to Home
        </Link>
      </section>
      <Footer />
    </>
  );
};
export default ErrorPage;
