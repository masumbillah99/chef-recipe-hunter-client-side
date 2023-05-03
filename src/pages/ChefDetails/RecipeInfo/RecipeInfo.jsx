import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import recipeImg from "../../../assets/icons/recipe.png";
import "react-toastify/dist/ReactToastify.css";

const RecipeInfo = ({ info }) => {
  const { cooking_method, ingredients, rating, recipe_name, _id } = info;
  const [disable, setDisable] = useState(false);

  const handleDisable = () => {
    if (!disable) {
      toast.success("add favorite");
      setDisable(true);
    }
  };

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
            <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
              {cooking_method?.map((method) => (
                <li>{method}</li>
              ))}
            </ul>
          </li>
        </ol>
        <p>
          <button
            type="button"
            onClick={handleDisable}
            className={
              !disable
                ? "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-5"
                : "text-white bg-gray-700 font-medium rounded-lg text-sm px-10 py-2.5 mb-2 m-5 cursor-text"
            }
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
