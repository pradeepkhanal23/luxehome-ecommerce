import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center w-screen h-screen text-base text-red-600 bg-softWhite"
    >
      <h1>Oops!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.data}</i>
      </p>
    </div>
  );
};
export default ErrorPage;
