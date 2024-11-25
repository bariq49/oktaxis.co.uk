import { homePageData } from "@/constants/homePageData";
import { Button } from "../ui/button";

const OurStory = () => {

  const { title: leftTitle, description: leftDescription, button: leftButton } = homePageData.ourStory.leftSec;
  const { title: rightTitle, description: rightDescription } = homePageData.ourStory.rightSec;

  return (
    <section className="w-full flex flex-col lg:flex-row gap-6 py-12">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 px-[4%] lg:px-[11%] h-[300px] lg:h-[600px] flex flex-col bg-gray-950 justify-center text-start">
        <h1 className="text-center lg:text-start text-5xl lg:text-6xl font-semibold border-b border-white leading-[75px] mb-8 text-white">{leftTitle}</h1>
        <p className="text-gray-300 mb-6 text-xl lg:text-2xl font-normal text-center lg:text-start">{leftDescription}</p>
        <Button className="bg-gray-950 hover:bg-gray-800 items-center lg:items-start w-full lg:w-32 text-lg pt-1 ">{leftButton}</Button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 pl-[2%] pr-[10%] h-auto lg:h-[610px] flex flex-col text-start justify-center align-middle">
        <h1 className="text-3xl font-bold mb-4 text-center lg:text-start">{rightTitle}</h1>
        <p className="text-gray-700 text-lg leading-8 p-2 text-center lg:text-start">{rightDescription}</p>
      </div>
    </section>
  );
};

export default OurStory;
