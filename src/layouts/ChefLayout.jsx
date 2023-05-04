import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const ChefLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto mt-32">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ChefLayout;
