import "flowbite";
import { Link } from "react-router-dom";
import {FaGoogle, FaGithub}  from "react-icons/fa";

const Login = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 pb-7">
      <form>
        <div className="relative z-0 w-3/4 md:w-1/2 mb-6 mx-auto group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-3/4 md:w-1/2 mb-6 mx-auto group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="text-white border bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 w-3/4 md:w-1/2"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <p className="text-lg">
          New to Chef Master Food Recipe. Please
          <Link className="text-orange-500 ms-1" to="/register">
            Register
          </Link>
        </p>
        <div className="flex items-center justify-center mx-auto my-3">
          <hr className="border-gray-500 border w-1/4" />
          <span className="mx-3">or</span>
          <hr className="border-gray-500 border w-1/4" />
        </div>
        <div>
          <button
            type="button"
            className="hover:text-white border border-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 w-3/4 md:w-1/2"
          > <FaGoogle className="inline me-2" />
            Continue with Google
          </button>
          <button
            type="button"
            className="hover:text-white border border-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 w-3/4 md:w-1/2"
          > <FaGithub className="inline me-2" />
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
