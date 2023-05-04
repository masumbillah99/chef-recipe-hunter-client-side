import "flowbite";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightNav = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-ass-10-masumbillah99.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mx-2">
      <div className="bg-gray-400 bg-opacity-10 p-5 rounded-md">
        <div className="bg-white p-5 rounded-md">
          <h3 className="text-xl font-bold uppercase">Other Countries Chef</h3>
          <hr className="mt-2 mb-5 w-1/2 lg:w-3/4 border-2 border-indigo-800 rounded" />
          <div>
            {countries?.map((country) => (
              <div
                key={country.id}
                className="font-bold uppercase py-2 px-5 border-b-2 hover:bg-gray-100 cursor-pointer"
              >
                {country?.country_name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-80 mt-5 text-center text-white bg-center bg-no-repeat bg-[url('https://i.ibb.co/FgfTrqf/slider-2.jpg')]">
        <h2 className="font-bold text-2xl">Awesome Recipe here</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, animi!
        </p>
      </div>

      <div className="my-10">
        <h3 className="text-2xl font-bold">Share</h3>
        <hr className="mt-2 mb-5 w-1/4 border-2 border-indigo-800 rounded" />
        <div className="flex gap-3 mx-5 lg:mx-0">
          <div className="bg-blue-500 hover:bg-blue-700 w-20 h-20">
            <Link
              to="https://www.facebook.com/profile.php?id=100036766350727"
              target="_blank"
            >
              <FaFacebookF className="h-20 text-2xl text-white mx-auto" />
            </Link>
          </div>
          <div className=" bg-sky-700 hover:bg-sky-900 w-20 h-20">
            <Link to="https://twitter.com/masumbillah_99" target="_blank">
              <FaTwitter className="h-20 text-2xl text-white mx-auto" />
            </Link>
          </div>
          <div className="bg-blue-800 hover:bg-blue-500 w-20 h-20">
            <Link
              to="https://www.linkedin.com/in/masumbillah99/"
              target="_blank"
            >
              <FaLinkedin className="h-20 text-2xl text-white mx-auto" />
            </Link>
          </div>
          <div className="bg-gray-500 hover:bg-gray-700 w-20 h-20">
            <Link to="https://www.github.com/masumbillah99/" target="_blank">
              <FaGithub className="h-20 text-2xl text-white mx-auto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
