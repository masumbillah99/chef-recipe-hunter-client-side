import "flowbite";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-no-repeat bg-[url(https://i.ibb.co/Qn7G2XF/banner-1.jpg)] bg-gray-400 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Bangladeshi Chef Master <br /> Recipe
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptatum dignissimos, ex delectus adipisci quod aliquam saepe
          voluptatibus recusandae laborum fuga, inventore ducimus quae maxime
          autem pariatur, eos dicta praesentium facilis rerum iure? Neque,
          perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis obcaecati aperiam in at nesciunt sunt.
        </p>
        <div className="">
          <Link
            to="/about"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
