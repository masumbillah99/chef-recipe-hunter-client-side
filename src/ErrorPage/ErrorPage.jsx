import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/icons/error.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="max-w-screen-xl flex flex-col items-center justify-center my-60">
      <img src={errorImg} className="w-24 mt-5 mx-auto" />
      <div className="text-center">
        <h2 className="font-bold text-xl my-4">
          <span className="text-danger">Error</span> {status || 404} <br />
        </h2>
        <p className="text-2xl font-semibold mb-8">{error?.message}</p>
        <Link
          to="/"
          className="bg-orange-300 hover:bg-orange-500 hover:text-white p-3 rounded-md"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
