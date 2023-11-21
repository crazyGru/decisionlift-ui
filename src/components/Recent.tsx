import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { useRef } from "react";

const TriangleMaskDiv = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(to left, #d35039, #331e77); // Gradient background

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    background-color: #fff; // Background color of the overlay
    clip-path: polygon(
      0 0,
      100% 10px,
      0 20%
    ); // Triangle cut-out at the top left
  }
`;

interface LatestProps {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Latest: React.FC<LatestProps> = ({
  url,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col p-[0_24px_0_24px]">
      <div
        className="w-full h-full border-4 border-solid border-white shadow mx-0 my-0 transition-transform duration-300 hover:scale-105"
        style={{
          height: "0",
          paddingBottom: "50%", // This maintains a 2:1 aspect ratio
          position: "relative", // This enables absolute positioning for the nested image
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 5px",
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute", // This positions the image absolutely within the container
            top: 0,
            left: 0,
          }}
        />
      </div>
      <a
        href={url}
        className="text-lg font-bold text-[#52276b]"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
          overflow: "hidden",
          margin: "20px 0 10px 0",
        }}
      >
        {title}
      </a>
      <p
        className="text-sm text-gray-500 text-[#777777] pb-2.5 relative"
        style={{ position: "relative" }}
      >
        <span
          style={{
            display: "block",
            width: "80px",
            height: "2px",
            backgroundColor: "#aaa",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        ></span>
      </p>
      <p
        className="tracking-[-0.1px] text-[14px]"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "5",
          overflow: "hidden",
          margin: "10px 0 10px 0",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const Recent: React.FC = () => {
  return (
    <>
      <TriangleMaskDiv className="flex flex-col w-full items-end text-white pt-[60px] pr-[20px] pb-[10px]">
        <h3 className="font-bold text-[50px]">Get Help Now</h3>
        <h5 className="text-[15px]">
          Our latest updates from across our channels
        </h5>
      </TriangleMaskDiv>
      <div
        className="flex flex-row pt-[70px] pb-[100px] px-[30px] sm:px-[60px] bg-[#f4f4f4]"
        style={{
          backgroundImage: "url('/Images/search.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1260: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Optimize your  Truck Load"
              description="Our optimizers will allow you to automate your  truck loading in few clicks, saving you space and loading time"
              imageUrl="./Images/1 (2).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Build Routings For Your Last Mile Delivery Business"
              description="Build and integrate Routing Optimization into your delivery business allowing"
              imageUrl="./Images/1 (19).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Optimally Assign your Resources to Tasks"
              description="Whether you have a fleet of taxis and drivers or warehouse robots, minimize the cost of assigning the right resource to the the right task"
              imageUrl="./Images/1 (5).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Store your Inventory for maximal Utimization"
              description="Do you have a warehouse with limited space and you want to increase your inventory without moving to a bigger space? We have solutions for you"
              imageUrl="./Images/1 (9).png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Recent;
