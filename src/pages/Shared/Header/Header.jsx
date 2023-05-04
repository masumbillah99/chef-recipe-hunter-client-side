// import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleDark = () => {
  //   document.body.style.backgroundColor = "black";
  // };

  return (
    <nav className="bg-white py-3 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/chef"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 md:pl-3 pr-4 text-blue-700 rounded md:p-0"
                      : "text-gray-600"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 md:pl-3 pr-4 my-3 lg:my-0 text-blue-700 rounded md:p-0"
                      : "text-gray-600 my-3 lg:my-0"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 md:pl-3 pr-4 text-blue-700 rounded md:p-0"
                      : "text-gray-600"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorite-recipe"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 md:pl-3 pr-4 my-3 lg:my-0 text-blue-700 rounded md:p-0"
                      : "text-gray-600 my-3 lg:my-0"
                  }
                >
                  Favorite Recipe
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:ms-5 lg:ms-0 md:text-2xl lg:text-3xl font-bold">
            <Link>Chef Master Food Recipe</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/chef"
                className={({ isActive }) =>
                  isActive
                    ? "block md:pl-3 pr-4 text-blue-700 rounded"
                    : "text-gray-600"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "block md:pl-3 pr-4 text-blue-700 rounded"
                    : "text-gray-600"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block md:pl-3 pr-4 text-blue-700 rounded"
                    : "text-gray-600"
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite-recipe"
                className={({ isActive }) =>
                  isActive
                    ? "block md:pl-3 pr-4 text-blue-700 rounded"
                    : "text-gray-600"
                }
              >
                Favorite Recipe
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/user-details">
                <img
                  src={user?.photoURL}
                  alt="user profile"
                  title={user?.displayName}
                  className="w-10 rounded-md"
                />
              </Link>
              <button
                onClick={handleLogout}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-3 text-center"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
