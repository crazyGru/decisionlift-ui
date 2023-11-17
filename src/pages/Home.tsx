import Building from "../components/Building";
import InterFace from "../components/Interface";
import Mainwrapper from "./Mainwrapper";

const Homepage: React.FC = () => {
  return (
    <>
      <InterFace />
      <Building />
      <Mainwrapper />
    </>
  );
};

export default Homepage;
