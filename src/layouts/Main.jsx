import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <div className="grid lg:grid-cols-3">
        <div className="col-span-2">
          <Outlet />
        </div>
        <div>
          <RightNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
