import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState("");

  // uncontrolled component => controlled component
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailErr("Please provide a valid email");
    } else {
      setEmailErr("");
    }
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPassErr("Password must be at least 6 characters long");
    } else if (!/.+[A-Z].+/.test(passwordInput)) {
      setPassErr("Password must contain at least one letter and one number");
    } else {
      setPassErr("");
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(name, photo, email, password);

    if ((name, photo, email, password)) {
      registerUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          toast.success("Successfully registered.");
          updateUserProfile(createdUser, name, photo);
          console.log(createdUser);
          e.target.reset();
        })
        .catch((error) => {
          toast.error(error.code);
        });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-32">
      <h1 className="mb-7 text-2xl font-bold text-center underline">
        Register Page
      </h1>
      <form onSubmit={handleRegistration}>
        <div className="relative z-0 w-3/4 md:w-1/2 mb-6 mx-auto group">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Name
          </label>
        </div>
        <div className="relative z-0 w-3/4 md:w-1/2 mb-6 mx-auto group">
          <input
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            name="photo"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="photo"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Photo URL
          </label>
        </div>
        <div className="relative z-0 w-3/4 md:w-1/2 mb-6 mx-auto group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
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
          {emailErr && <span className="error">{emailErr}</span>}
        </div>
        <div className="relative z-0 w-3/4 md:w-1/2 mb-6 mx-auto group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
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
          {passErr && <span className="error">{passErr}</span>}
        </div>
        <p className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-3/4 md:w-1/2"
          >
            Register
          </button>
        </p>
      </form>
      <div className="text-center mt-3">
        <p className="text-lg">
          Already registered. Please
          <Link className="text-orange-500 ms-1 hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
