import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Navigation from "swiper";

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
    clip-path: polygon(0 0, 100% 10px, 0 20%); // Triangle cut-out at the top left
  }
`;

interface LatestProps {
  url: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const Latest: React.FC<LatestProps> = ({
  url,
  title,
  date,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col p-[0_44px_0_44px]">
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
        {date}
        <span
          style={{
            display: "block",
            width: "60px",
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
      </p>{" "}
      {/* Truncate after 5 lines */}
    </div>
  );
};

const Recent: React.FC = () => {
  const swiperRef = useRef<SwiperCore>(null);

  const goNext = () => {
    if (swiperRef.current && "slideNext" in swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && "slidePrev" in swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <>
      <TriangleMaskDiv className="flex flex-col w-full items-end text-white pt-[60px] pr-[20px] pb-[10px]">
        <h3 className="font-bold text-[50px]">Latest</h3>
        <h5 className="text-[15px]">
          Our latest updates from across our channels
        </h5>
      </TriangleMaskDiv>
      <div
        className="flex flex-row pt-[40px] pb-[100px] bg-[#f4f4f4]"
        style={{
          backgroundImage: "url('/Images/search.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
        }}
      >
        <button
          onClick={goPrev}
          className="text-3xl text-black bg-transparent border-none cursor-pointer hover:bg-white hover:text-gray-500 p-2 rounded-full"
        >
          <SlArrowLeftCircle />
        </button>
        <Swiper
          //   ref={swiperRef}
          //   modules={[Navigation]}
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
              title="Sample Title"
              date="January 1, 2023"
              description="Long description text goes here Long description text goes hereLong description text goes hereLong description text goes hereLong description text goes here"
              imageUrl="./Images/1 (2).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Sample Title"
              date="January 1, 2023"
              description="Long description text goes here Long description text goes hereLong description text goes hereLong description text goes hereLong description text goes here"
              imageUrl="./Images/1 (19).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Sample Title Sample TitleSample TitleSample Title Sample Title"
              date="January 1, 2023"
              description="Long description text goes here Long description text goes hereLong description text goes hereLong description text goes hereLong description text goes here"
              imageUrl="./Images/1 (5).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Sample Title Sample Title Sample Title"
              date="January 1, 2023"
              description="Long description text goes here Long description text goes hereLong description text goes hereLong description text goes hereLong description text goes here"
              imageUrl="./Images/1 (9).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Sample Title Sample Title Sample Title"
              date="January 1, 2023"
              description="Long description text goes here Long description text goes hereLong description text goes hereLong description text goes hereLong description text goes here"
              imageUrl="./Images/1 (9).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Sample Title Sample Title Sample Title"
              date="January 1, 2023"
              description="Long description text goes here Long description text goes hereLong description text goes hereLong description text goes hereLong description text goes here"
              imageUrl="./Images/1 (9).png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Latest
              url="https://example.com"
              title="Sample Title Sample Title Sample Title"
              date="January 1, 2023"
              description="Long description text goes here Long description text goes hereLong description text goes hereLong description text goes hereLong description text goes here"
              imageUrl="./Images/1 (9).png"
            />
          </SwiperSlide>
        </Swiper>
        <button
          onClick={goNext}
          className="text-3xl text-black bg-transparent border-none cursor-pointer hover:bg-white hover:text-gray-500 p-2 rounded-full"
        >
          <SlArrowRightCircle />
        </button>
      </div>
    </>
  );
};

export default Recent;
