import Marquee from "react-fast-marquee";
import pak from "../../../assets/flag/pak.png";
import jap from "../../../assets/flag/jap.png";
import mal from "../../../assets/flag/maly.png";
import indo from "../../../assets/flag/indo.png";
import iran from "../../../assets/flag/iran.png";
import nepal from "../../../assets/flag/nepal.jpg";
import vietnam from "../../../assets/flag/vietnam.png";

const CountryMarquee = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto ps-10 pt-10">
        <h1 className="text-2xl font-bold ">Our World Customer Country</h1>
        <hr className="mt-2 mb-8 w-1/3 border-2 border-indigo-800 rounded" />
      </div>
      <Marquee direction="right" speed={100}>
        <div className="mx-4">
          <img className="w-full h-20" src={pak} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20 border mx-3" src={jap} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20" src={mal} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20 border" src={indo} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20" src={iran} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20" src={nepal} alt="" />
        </div>
        <div>
          <img className="w-full h-20" src={vietnam} alt="" />
        </div>
      </Marquee>
    </>
  );
};

export default CountryMarquee;
