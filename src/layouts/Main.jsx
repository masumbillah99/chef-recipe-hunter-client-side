import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CountryMarquee from "../pages/Home/CountryMarquee/CountryMarquee";
import Home from "../pages/Home/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 my-10">
        <div className="col-span-2 mx-5 md:ms-14">
          <Outlet />
        </div>
        <div className="mx-10 lg:mx-0">
          <RightNav />
        </div>
      </div>
      <ToastContainer />
      <CountryMarquee />
      <Footer />
    </>
  );
};

export default Main;
