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

        <div className="container flex flex-col justify-center items-center gap-y-2  m-auto gap-x-5 md:gap-y-2 py-5 px-[2%]">
              <Image
                src={heroSection.backgroundImage}
                alt="Hero Image"
                className="w-[30%]"
              />
              <div className="w-full flex flex-col lg:flex-row gap-y-5 lg:gap-x-5">
                <div className="w-full lg:w-[70%] h-[90vh] lg:h-[100vh] overflow-auto custom-scrollbar">
                    <BookingForm/>
                </div>   
                <div className="w-full lg:w-[30%]">
                    <HeroCard/>
                </div>

              </div>
        </div>

      </div>

      <div className="w-full bg-gray-50">
            <div className="">
                <TripWorking/>
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
