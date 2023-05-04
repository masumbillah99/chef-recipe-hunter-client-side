import { useEffect, useState } from "react";
// import Favo from "./Favo";

const FavoriteRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recipe-info"));
    setRecipes(storedData);
  }, []);

  const removeFromDb = (id) => {
    const findData = recipes.filter((rec) => rec._id !== id);
    localStorage.setItem("recipe-info", JSON.stringify(findData));
  };

  return (
    <div className="max-w-screen-xl mx-auto my-32 px-2 md:px-10">
      <h1 className="text-2xl font-bold">My Favorite Recipes</h1>
      <hr className="mt-2 mb-8 w-1/4 border-2 border-indigo-800 rounded" />
      <div>
        {recipes?.map((recipe) => (
          <div
            className="bg-gray-300 p-5 mb-3 rounded-md w-full lg:w-3/4 mx-auto"
            key={recipe?._id}
          >
            <div className="flex flex-col md:flex-row gap-7 items-center">
              <img
                className="w-1/2 md:w-1/3"
                src={recipe?.recipe_picture}
                alt=""
              />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {recipe?.chef_name}
                </h3>
                <h4>
                  Recipe Name:{" "}
                  <span className="font-bold">{recipe?.recipe_name}</span>
                </h4>
              </div>
              <button
                onClick={() => removeFromDb(recipe._id)}
                className="md:ms-auto py-2 px-5 bg-red-600 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipe;
