import React from "react";

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="font-semibold text-[30px] lg:text-[45px] text-[#52276b] text-center">
    {title}
  </h2>
);

const ImageCard: React.FC<{
  src: string;
  alt: string;
  title: string;
  className?: string;
  url: string;
}> = ({ src, alt, title, className, url }) => (
  <div className={`flex flex-col ${className}`}>
    <img src={src} alt={alt} className="w-full" />
    <h4 className="text-[#364d55] font-bold text-[20px] pt-[27px] pl-[20px] pb-[10px] tracking-[-0.3px]">
      {title}
    </h4>
    <a
      href={url}
      className="text-[#fa3c66] text-[12px] pb-[6px] ml-[20px] tracking-[-0.3px]"
    >
      Read more
    </a>
  </div>
);

const Building: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="w-full px-[20px] sm:px-[50px] py-[30px] lg:max-w-[1260px] pb-[50px]">
        <SectionHeader title="SOLUTIONS TAILORED TO YOUR NEEDS" />

        <div className="flex flex-col md:hidden gap-[10px]">
          <p className="text-[#364d55] text-[14px] tracking-[-0.3px] pb-[19px]">
            Leveraging its expertise in GPU-accelerated computing, deep
            learning, and reinforcement learning, InstaDeep has built AI systems
            to tackle the most complex challenges across a range of industries
            and sectors.
          </p>

          <ImageCard
            src="./Images/build (1).png"
            alt="Biology"
            title="Biology"
            className=""
            url=""
          />
          <ImageCard
            src="./Images/1 (2).png"
            alt="Logistics"
            title="Logistics"
            className=""
            url=""
          />
          <ImageCard
            src="./Images/1 (3).png"
            alt="Electronic Design"
            title="Electronic Design"
            className=""
            url=""
          />
          <ImageCard
            src="./Images/build (4).png"
            alt="Energy"
            title="Energy"
            className=""
            url=""
          />
        </div>

        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-0">
          <p className="flex items-end text-[#364d55] text-[14px] tracking-[-0.3px] pb-[45px] pr-[10px]">
            Leveraging its expertise in GPU-accelerated computing, deep learning
            and reinforcement learning, InstaDeep has built AI systems to tackle
            the most complex challenges across a range of industries and
            sectors.
          </p>
          <div className="flex flex-col justify-end">
            <img src="./Images/1 (2).png" alt="Logistics" className="w-full" />
          </div>
          <div className="flex" />
          <div className="flex flex-col justify-end">
            <img src="./Images/build (4).png" alt="Energy" className="w-full" />
          </div>
          <ImageCard
            src="./Images/build (1).png"
            alt="Biology"
            title="Biology"
            className=""
            url=""
          />
          <div className="flexf flex-col">
            <h4
              className="text-[#364d55] text-bold text-[20px] pt-[27px] pr-[0] pb-[10px] pl-[20px] tracking-[-0.3px]"
              style={{ fontWeight: "bolder" }}
            >
              Logistics
            </h4>
            <a
              href=""
              className="text-[#fa3c66] text-[12px] pb-[6px] ml-[20px] tracking-[-0.3px]"
            >
              Read more
            </a>
          </div>
          <ImageCard
            src="./Images/1 (3).png"
            alt="Electronic Design"
            title="Electronic Design"
            className=""
            url=""
          />
          <div className="flex flex-col">
            <h4
              className="text-[#364d55] text-bold text-[20px] pt-[27px] pr-[0] pb-[10px] pl-[20px] tracking-[-0.3px]"
              style={{ fontWeight: "bolder" }}
            >
              Energy
            </h4>
            <a
              href=""
              className="text-[#fa3c66] text-[12px] pb-[6px] ml-[20px] tracking-[-0.3px]"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
