import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { signInUser, googleSignIn, githubSignIn, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const from = location?.state?.from?.pathname || "/chef";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sign in a new user (first time)
  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Successfully Login");
        navigate(from);
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  // google login with popup
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success("successfully login with google");
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  // github login with popup
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        toast.success("successfully login with google");
        navigate(from);
        console.log(user);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  // handle reset password when you forget password
  const handleResetPassword = () => {
    const emailInput = emailRef.current.value;
    if (!emailInput) {
      toast.warning("Please provide email for reset password");
    }
    resetPassword(emailInput)
      .then(() => {
        toast.success("Check your email");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  // uncontrolled component => controlled component
  // const handleEmail = (e) => {
  //   const emailInput = e.target.value;
  //   setEmail(emailInput);
  // };

  // const handlePassword = (e) => {
  //   const passwordInput = e.target.value;
  //   setPassword(passwordInput);
  // };

  return (
    <div className="max-w-screen-xl mx-auto mt-32 pb-7">
      <h1 className="mb-7 text-2xl font-bold text-center underline">
        Login Page
      </h1>
      <form onSubmit={handleLogin}>
        <div className="relative z-0 w-3/4 md:w-1/2 mb-6 mx-auto group">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
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
            onChange={(e) => setPassword(e.target.value)}
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
        <p className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-3/4 md:w-1/2"
          >
            Login
          </button>
        </p>
      </form>
      <div className="text-center mt-3">
        <p className="text-red-500">
          Forget Password? Please
          <Link
            onClick={handleResetPassword}
            className="text-blue-500 ms-1 hover:underline"
          >
            Reset Password
          </Link>
        </p>
        <p className="text-lg mt-5">
          New to Chef Master Food Recipe. Please
          <Link className="text-orange-500 hover:underline ms-1" to="/register">
            Register
          </Link>
        </p>
        <div className="flex items-center justify-center mx-auto my-3">
          <hr className="border-gray-500 border w-1/5" />
          <span className="mx-3">or</span>
          <hr className="border-gray-500 border w-1/5" />
        </div>
        <div>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="hover:text-white border border-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 w-3/4 md:w-1/2"
          >
            {" "}
            <FaGoogle className="inline me-2" />
            Continue with Google
          </button>
          <button
            onClick={handleGithubLogin}
            type="button"
            className="hover:text-white border border-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 w-3/4 md:w-1/2"
          >
            {" "}
            <FaGithub className="inline me-2" />
            Continue with Github
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
