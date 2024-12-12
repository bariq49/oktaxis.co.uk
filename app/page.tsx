"use client";

import BookingForm from "@/components/BookingForm/BookingForm";
import { homePageData } from "@/constants/homePageData";
import HeroCard from "@/components/Sections/HeroCard";
import TripWorking from "@/components/Sections/TripWorkingCard";
import ServiceCard from "@/components/Sections/ServiceCard";
import OurStory from "@/components/Sections/OurStory";
import Testimonials from "@/components/Sections/Testimonials";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import FAQSection from "@/components/Sections/FaqSection";
import Image from "next/image";
import BookingProcess from "@/components/Sections/BookingProcess";


const Home = () => {
  const { heroSection } = homePageData;

  return (
    <main className="w-full">

      {/* Hero Section */}
      <div
        className={`w-full h-auto lg:h-[100vh] overflow-x-hidden bg-contain object-cover bg-no-repeat flex text-black overflow-hidden`}
        // style={{
        //     backgroundImage: `url(${heroSection.backgroundImage.src})`
            
        // }}
        >

        <div className=" flex flex-col items-center gap-y-2  m-auto gap-x-5 md:gap-y-2 px-[2%]">
              <div className="!z-50 flex flex-col items-center m-auto">
                    <h2 className="font-bold py-4 px-4 lg:px-[10%] text-center text-2xl lg:text-4xl">
                        <span className="text-green-700">Manchester</span> Airport Taxi & Airport  <span className="text-green-700">Transfers</span>
                    </h2>
                    <Image
                      src={heroSection.backgroundImage}
                      alt="Hero Image"
                      className="w-full lg:w-[30%] flex lg:hidden"
                    />
              </div>
              <div className=" w-full flex flex-col lg:flex-row gap-y-2 lg:gap-x-5 m-auto items-center">
                <div className="container lg:w-[70%] h-[90vh] lg:h-[80vh] overflow-auto custom-scrollbar">
                    <BookingForm/>
                </div>   
                <div className="w-full lg:w-[30%]">
                    <HeroCard/>
                </div>

              </div>
        </div>

      </div>

      <div className="w-full bg-gray-50">
            {/* <div className="">
                <TripWorking/>
            </div> */}
            <div className="">
                <BookingProcess/>
            </div>
      </div>
            <div className="w-full">
              <ServiceCard/>
              <OurStory/>
              <WhyChooseUs/>
            </div>

            <div className="w-full flex items-center justify-center py-12 md:py-16 lg:py-20">
              <Testimonials/>

            </div>
            <div className="w-full flex items-center justify-center py-12 md:py-16 lg:py-20">
              <FAQSection/>

            </div>
      
    </main>
  );
};

export default Home;
