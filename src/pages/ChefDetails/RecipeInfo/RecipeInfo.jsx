import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import recipeImg from "../../../assets/icons/recipe.png";
import "react-toastify/dist/ReactToastify.css";

const RecipeInfo = ({ info, chef_name }) => {
  const [disable, setDisable] = useState(false);
  const [storage, setStorage] = useState([]);
  const {
    cooking_method,
    ingredients,
    rating,
    recipe_name,
    recipe_picture,
    _id,
  } = info;

  // const handleDisable = () => {
  //   if (!disable) {
  //     toast.success("add favorite");
  //     setDisable(true);
  //   }
  // };

  const handleFavoriteBtn = () => {
    // set favorite info in local storage
    const previousStorageData = JSON.parse(localStorage.getItem("recipe-info"));
    let recipeInfo = [];
    const newRecipeInfo = { chef_name, _id, recipe_name, recipe_picture };

    if (previousStorageData) {
      const isStored = previousStorageData.find((rc) => rc._id === _id);
      if (isStored) {
        toast.error("Already add in Favorite");
      } else {
        recipeInfo.push(...previousStorageData, newRecipeInfo);
        localStorage.setItem("recipe-info", JSON.stringify(recipeInfo));
        setStorage(recipeInfo);
      }
    } else {
      recipeInfo.push(newRecipeInfo);
      localStorage.setItem("recipe-info", JSON.stringify(recipeInfo));
      setStorage(recipeInfo);
    }

    // button disable
    if (!disable) {
      toast.success("add favorite");
      setDisable(true);
    }
  };

  // const handleLocalStorage = () => {
  //   const previousStorageData = JSON.parse(localStorage.getItem("recipe-info"));
  //   let recipeInfo = [];
  //   const newRecipeInfo = {chef_name, _id, recipe_name, recipe_picture}

  //   if(previousStorageData) {
  //     recipeInfo.push(...previousStorageData, newRecipeInfo);
  //     localStorage.setItem("recipe-info", JSON.stringify(recipeInfo));
  //     setStorage(recipeInfo);
  //   } else {
  //     recipeInfo.push(newRecipeInfo);
  //     localStorage.setItem("recipe-info", JSON.stringify(recipeInfo));
  //     setStorage(recipeInfo);
  //   }
  // }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-5 md:p-10 mb-7">
      <article>
        <h2 className="text-2xl md:text-4xl font-bold flex gap-3">
          <img className="w-10" src={recipeImg} alt="" />
          {recipe_name}
        </h2>
        <div className="flex gap-3 mb-5 mt-3">
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(rating || 0)}
            readOnly
          />
          <span className="ms-2">({rating} reviews)</span>
        </div>
        <ol className="space-y-4 text-gray-500 list-inside">
          <li>
            <span className="text-xl font-bold text-gray-600">Ingredients</span>
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              {ingredients?.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </li>
          <li>
            <span className="text-xl font-bold text-gray-600">
              Cooking Method
            </span>
            <ul className="h-48 overflow-scroll overflow-x-hidden pl-5 mt-2 space-y-1 list-disc list-inside">
              {cooking_method?.map((method) => (
                <li>{method}</li>
              ))}
            </ul>
          </li>
        </ol>
        <p>
          <button
            type="button"
            onClick={handleFavoriteBtn}
            className={
              !disable
                ? "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-5"
                : "text-white bg-gray-700 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 m-5 cursor-text"
            }
            // className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-5"
            // disabled={disable}
          >
            Add Favorite
          </button>
        </p>
      </article>
      <ToastContainer />
    </div>
  );
};

export default RecipeInfo;
