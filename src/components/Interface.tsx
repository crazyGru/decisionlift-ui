import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedMainHeading = styled.h1`
  animation: ${slideInLeft} 1s ease-out;
`;

const AnimatedSubHeading = styled.p`
  animation: ${slideInTop} 1s ease-out;
`;

const AnimatedButton = styled.button`
  animation: ${fadeIn} 1s ease-out;
`;

const TriangleMaskDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
  backdrop-filter: blur(5px);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 140%; // Adjust the size of the triangle
    height: 100px; // Adjust the size of the triangle
    background-color: #fff;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
`;

const InterFace: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('/Images/main.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <TriangleMaskDiv className="flex flex-col w-full h-full items-center">
        <div className="w-full lg:max-w-[1260px]">
          <Link
            className="flex flex-row items-center text-[#222436] font-josefin text-bold w-full text-start text-[20px] text-bold sm:text-[40px] px-[15px] pt-[20px] sm:px-[15px] sm:pt-[40px] md:px-[30px] md:pt-[50px] lg:pt-[100px]"
            to="/"
          >
            <img
              src="/Logo/logoImage.png"
              alt="logo"
              className="h-[60px] pb-[10px]"
            />
            <h1>ecision Lift</h1>
          </Link>
          <div className="px-[20px]">
            <div className="flex flex-col py-[40px] ">
              <AnimatedMainHeading className="text-[#0C0E1A] md:[font:700_4.8125em/95px_Montserrat,_Helvetica,_Sans-Serif] [font:700_50px/70px_Montserrat,_Helvetica,_Sans-Serif] text-center md:text-left tracking-[-0.3px] pb-[150px]">
                AI PRODUCTS FOR YOUR LOGISTICS BUSINESS
              </AnimatedMainHeading>
              <div className="flex flex-col items-center md:items-end">
                <AnimatedSubHeading className="text-[#FFF] text-center md:text-end float-right text-[30px] [font:600_20px/1.8125em_Montserrat,_Helvetica,_Sans-Serif] tracking-[-0.3px] mb-[1em]">
                  Let us build the AI algorithms for your success!
                </AnimatedSubHeading>
                <AnimatedButton className="text-[#0C0E1A] inline-block uppercase [font:600_15px/1.8125em_Montserrat,_Helvetica,_Sans-Serif] tracking-[2px] px-[46px] py-[13px] bg-[#FFF] rounded-[8px] leading-[18px] no-underline [transition:all_0.5s] hover:bg-[#e0e0e0]">
                  BOOK NOW
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </TriangleMaskDiv>
    </div>
  );
};

export default InterFace;
