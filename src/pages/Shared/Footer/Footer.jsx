// import { Link } from "react-router-dom";
import "flowbite";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white rounded-lg shadow dark:bg-gray-900 mt-32">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-3 lg:mx-0">
          <div>
            <h3 className="text-xl font-bold mb-2">About</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              placeat at nemo corrupti et quo esse, officiis similique repellat
              asperiores.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Recipes</h3>
            <ul className="list-disc ps-8">
              <li className="underline">
                <Link>Browse Recipes</Link>
              </li>
              <li className="underline">
                <Link>Recipe Page</Link>
              </li>
              <li className="underline">
                <Link>Submit Recipe</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Features</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              odit, mollitia eligendi sint facere aliquid!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">New Letter</h3>
            <p>
              Sign up to receive email updates on new product announcements,
              gift ideas, sales and more.
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center gap-3">
          <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400 md:mx-auto">
            © 2023 Chef Master. All Rights Reserved.
          </span>
          <div className="flex space-x-6 sm:justify-center md:ms-auto">
            <Link to="/" target="_blank" className="dark:hover:text-white">
              <FaFacebook />
            </Link>
            <Link to="/" target="_blank" className="dark:hover:text-white">
              <FaYoutube />
            </Link>
            <Link to="#" className="dark:hover:text-white">
              <FaGithub />
            </Link>
            <Link to="#" className="dark:hover:text-white">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
