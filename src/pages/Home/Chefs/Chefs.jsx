import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const chefData = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl text-gray-500 font-bold mb-5">
        Latest Chef Master
      </h2>
      <div className="grid md:grid-cols-2 gap-3">
        {chefData.map((data) => (
          <ChefCard key={data.id} data={data}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
