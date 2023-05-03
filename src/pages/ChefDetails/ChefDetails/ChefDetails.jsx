import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

const ChefDetails = () => {
  //   const id = useParams();
  const data = useLoaderData();
  const navigation = useNavigation();
  const {
    chef_name,
    chef_picture,
    likes,
    num_of_recipes,
    years_of_experience,
    description,
    recipe_info,
  } = data;

  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <div className="px-5 md:px-0 md:mx-10">
      <div className="flex flex-col items-center gap-5 p-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
        <img
          className="object-cover md:w-1/2 h-80 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={chef_picture}
          alt="chef picture"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {chef_name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ShieldCheckIcon className="w-6 text-green-500 p-1 me-3" />
            Number of Recipes:
            <span className="font-bold mx-1">{num_of_recipes}</span>
          </p>
          <div className="">
            <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
              <ShieldCheckIcon className="w-6 text-green-500 p-1 me-3" />
              Experience:
              <span className="font-bold mx-1">{years_of_experience}</span>
              years
            </p>
            <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
              <ShieldCheckIcon className="w-6 text-green-500 p-1 me-3" />
              Liked by
              <span className="font-bold mx-1">{likes}</span> people.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-4xl font-bold">Here are some of my Recipe</h2>
        <hr className="mt-2 mb-8 w-3/4 border-2 border-indigo-800 rounded" />
        {recipe_info?.map((info) => (
          <RecipeInfo key={info._id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
