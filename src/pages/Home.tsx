import Building from "../components/Building";
import Footer from "../components/Footer";
import InterFace from "../components/Interface";
import Partner from "../components/Partner";
import Press from "../components/Press";
import Recent from "../components/Recent";
import Research from "../components/Research";

const Homepage: React.FC = () => {
  return (
    <>
      <InterFace />
      <Building />

      <div className="flex flex-col shadow-lg mx-[20px] md:mx-[30px] lg:mx-[80px] mb-[50px]">
        <Recent />
        {/* <Research /> */}
        <Press />
        <Partner />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
