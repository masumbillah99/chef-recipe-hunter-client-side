import "flowbite";
import { Link } from "react-router-dom";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

const ChefCard = ({ data }) => {
  const {
    id,
    chef_name,
    chef_picture,
    likes,
    num_of_recipes,
    years_of_experience,
  } = data;

  return (
    <>
      <div className="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mb-10">
        <img
          className="rounded-t-lg w-40 mx-auto my-4"
          src={chef_picture}
          alt=""
        />
        <hr />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {chef_name}
          </h5>
          <p className="mb-3 font-semibold text-gray-700">
            Number of Recipes: {num_of_recipes}
          </p>
          <div className="flex justify-between mb-4">
            <p>
              Experience:{" "}
              <span className="font-semibold">{years_of_experience}</span> years
            </p>
            <p className="flex">
              <HandThumbUpIcon className="w-6 text-blue-500 me-1" /> {likes}
            </p>
          </div>
          <Link
            to={`/chef/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            View Recipes
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
