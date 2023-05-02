import "flowbite";
import chicken from "../../../assets/icons/chicken.png";
import fastFood from "../../../assets/icons/fast-food.png";
import fish from "../../../assets/icons/fish.png";
import pizza from "../../../assets/icons/pizza.png";
import salad from "../../../assets/icons/salad.png";
import soup from "../../../assets/icons/soup.png";
import pak from "../../../assets/icons/pak.png";
import jap from "../../../assets/icons/jap.png";
import mal from "../../../assets/icons/maly.png";
import indo from "../../../assets/icons/indo.png";

const RightNav = () => {
  return (
    <div className="bg-gray-400 bg-opacity-10 p-10 rounded-md">
      <div className="bg-white text-center p-5 rounded-md">
        <h3 className="text-xl font-bold uppercase">our newsletter</h3>
        <hr className="border border-dotted my-2" />
        <p className="my-5">
          Subscribe for our weekly recipes tips, wew promise to not spam you.
        </p>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your email address"
        />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold uppercase">categories</h3>
        <div className="grid grid-cols-2 px-10 pt-4 cursor-pointer">
          <div className="border-2 border-dotted border-t-0 border-s-0 ps-20 lg:ps-2 pb-3">
            <img className="w-12" src={chicken} alt="" />
            <h4 className="text-lg font-semibold">Chicken</h4>
          </div>
          <div className="border-2 border-dotted border-t-0 border-x-0 ps-20 lg:ps-1 xl:ps-12">
            <img className="w-12" src={fastFood} alt="" />
            <h4 className="text-lg font-semibold">Fast Food</h4>
          </div>
          <div className="border-2 border-dotted border-t-0 border-s-0 ps-20 lg:ps-2 py-3">
            <img className="w-12" src={pizza} alt="" />
            <h4 className="text-lg font-semibold">Pizza</h4>
          </div>
          <div className="border-2 border-dotted border-t-0 border-x-0 ps-20 lg:ps-1 xl:ps-12 py-3">
            <img className="w-12" src={fish} alt="" />
            <h4 className="text-lg font-semibold">Fish</h4>
          </div>
          <div className="border-2 border-dotted  border-y-0 border-s-0 ps-20 lg:ps-2 py-3">
            <img className="w-12" src={soup} alt="" />
            <h4 className="text-lg font-semibold">Soups</h4>
          </div>
          <div className="border-2 border-dotted border-y-0 border-x-0 ps-20 lg:ps-1 xl:ps-12 py-3">
            <img className="w-12" src={salad} alt="" />
            <h4 className="text-lg font-semibold">Salads</h4>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold uppercase">popular cuisines</h3>
        <div className="grid grid-cols-2 px-10 pt-4 cursor-pointer">
          <div className="border-2 border-dotted border-t-0 border-s-0 ps-20 lg:ps-2 py-5">
            <img className="w-12" src={pak} alt="" />
            <h4 className="text-lg font-semibold">Pakistan</h4>
          </div>
          <div className="border-2 border-dotted border-t-0 border-x-0 ps-20 lg:ps-10 py-5">
            <img className="w-12" src={jap} alt="" />
            <h4 className="text-lg font-semibold">Japan</h4>
          </div>
          <div className="border-2 border-dotted border-t-0 border-s-0 ps-20 lg:ps-2 py-5">
            <img className="w-12" src={mal} alt="" />
            <h4 className="text-lg font-semibold">Malaysia</h4>
          </div>
          <div className="border-2 border-dotted border-t-0 border-x-0 ps-20 lg:ps-10 py-5">
            <img className="w-12" src={indo} alt="" />
            <h4 className="text-lg font-semibold">Indonesia</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
