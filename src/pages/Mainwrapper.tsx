import React from "react";
import Recent from "../components/Recent";
import Research from "../components/Research";
import Press from "../components/Press";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
const Mainwrapper: React.FC = () => {
  return (
    <div className="flex flex-col shadow-lg mx-[20px] md:mx-[30px] lg:mx-[80px] mb-[50px]">
      <Recent />
      <Research />
      <Press />
      <Partner />
      <Footer />
    </div>
  );
};

export default Mainwrapper;
