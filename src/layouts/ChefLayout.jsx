import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";

const ChefLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-3 mt-32">
        <div className="col-span-2 mx-auto lg:mx-0 mb-10 lg:mb-0">
          <Outlet />
        </div>
        <div className="">
          <RightNav />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChefLayout;
