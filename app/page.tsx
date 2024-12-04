"use client";

import BookingForm from "@/components/BookingForm/BookingForm";
import { homePageData } from "@/constants/homePageData";
import HeroCard from "@/components/Sections/HeroCard";
import TripWorking from "@/components/Sections/TripWorkingCard";
import ServiceCard from "@/components/Sections/ServiceCard";
import OurStory from "@/components/Sections/OurStory";
import Testimonials from "@/components/Sections/Testimonials";

const Home = () => {
  const { heroSection } = homePageData;

  return (
    <main className="w-full">

      {/* Hero Section */}
      <div
        className={`w-full h-auto lg:h-[100vh] overflow-x-hidden bg-cover bg-no-repeat bg-center flex text-black overflow-hidden`}
        style={{
            backgroundImage: `url(${heroSection.backgroundImage.src})`
            
        }}
        >

        <div className="container flex flex-col gap-y-4 md:flex-row m-auto gap-x-5 md:gap-y-4 py-5 px-[2%]">
                <div className="w-full lg:w-[70%] h-[90vh] lg:max-h-[70vh] overflow-auto custom-scrollbar">
                    <BookingForm/>
                </div>   
                <div className="w-full lg:w-[30%]">
                    <HeroCard/>
                </div>
        </div>

      </div>

      <div className="w-full bg-gray-200">
            <div className="container flex m-auto justify-center  gap-x-5 md:gap-y-4 py-5 px-[2%]">
                <TripWorking/>
            </div>
      </div>
            <div className="w-full">
              <ServiceCard/>
              <OurStory/>
            </div>

            <div className="w-full flex items-center justify-center mb-16 m-auto">
              <Testimonials/>

            </div>
      
    </main>
  );
};

export default Home;
