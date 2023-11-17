import React from "react";
import { SlArrowUpCircle } from "react-icons/sl";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative flex flex-col gap-[20px] px-[40px] pt-[40px] pb-[60px] items-center text-center text-[#CCCCCC] bg-[#364d55]"
      style={{
        backgroundImage: "url('/Images/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
      }}
    >
      <div className="w-full">
        <ul className="flex flex-col w-full h-full gap-[10px] justify-center md:flex-row md:justify-between md:items-start">
          <li className="flex flex-col gap-[8px] justify-center items-center md:justify-start md:items-start">
            <a href="" className="hover:text-white">
              Products
            </a>
            <ul className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <li className="hover:text-white text-[12px]">DeepChain™</li>
              <li className="hover:text-white text-[12px]">DeepPack™</li>
              <li className="hover:text-white text-[12px]">DeepPack™</li>
            </ul>
          </li>
          <li className="flex flex-col gap-[8px] justify-center items-center md:justify-start md:items-start">
            <a href="" className="hover:text-white">
              Solutions
            </a>
          </li>
          <li className="flex flex-col gap-[8px] justify-center items-center md:justify-start md:items-start">
            <a href="" className="hover:text-white">
              Research
            </a>
            <ul className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <li className="hover:text-white  text-[12px]">Research Papers</li>
            </ul>
          </li>
          <li className="flex flex-col gap-[8px] justify-center items-center md:justify-start md:items-start">
            <a href="" className="hover:text-white">
              News
            </a>
          </li>
          <li className="flex flex-col gap-[8px] justify-center items-center md:justify-start md:items-start">
            <a href="" className="hover:text-white">
              About Us
            </a>
            <ul className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <li className="hover:text-white text-[12px]">Career</li>
            </ul>
          </li>
          <li className="flex flex-col gap-[8px] justify-center items-center md:justify-start md:items-start">
            <a href="" className="hover:text-white">
              Open Source
            </a>
          </li>
          <li className="flex flex-col gap-[8px] justify-center items-center md:justify-start md:items-start">
            <a href="" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex w-full items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <p className="text-base mx-4">
          © 2023 Decision Lift - All Rights Reserved.
        </p>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-10 text-3xl text-white bg-transparent border-none cursor-pointer hover:bg-white hover:text-gray-500 p-2 rounded-full"
        aria-label="Scroll to top"
      >
        <SlArrowUpCircle />
      </button>
    </div>
  );
};

export default Footer;
