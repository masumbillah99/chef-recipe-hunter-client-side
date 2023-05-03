import { useLoaderData } from "react-router-dom";
import ChefCard from "./chefCard/ChefCard";

const Chefs = () => {
  const chefData = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl text-gray-500 font-bold">
        Meet Our Awesome Chefs
      </h2>
      <hr className="mt-2 mb-10 w-1/2 border-2 border-indigo-800 rounded" />
      <div className="grid md:grid-cols-2 gap-3">
        {chefData?.map((data) => (
          <ChefCard key={data.id} data={data}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
