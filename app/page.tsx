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
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { StatusCard } from "@/components/Sections/StatusCard";
import AirportTransportation from "@/components/Sections/AirportTransportation";
import PremiumTransportation from "@/components/Sections/PremiumTransportation";
import WhyChooseOktaxis from "@/components/Sections/WhyChooseOktaxis";
import PaymentDone from "@/components/BookingForm/PaymentDone/PaymentDone";


const Home = () => {
  const { heroSection } = homePageData;
  const [paymentDone, setPaymentDone] = useState(false)
  
  return (
    <main className={`w-full  ${paymentDone && "overflow-hidden h-screen"}`}>
      <Suspense><PaymentDone setPaymentDone={setPaymentDone} paymentDone={paymentDone}/></Suspense>
      {/* Hero Section */}
      <div
        className={`w-full  bg-contain object-cover bg-no-repeat flex text-black mb-16 md:mb-24 `}
      >
        <div className={`${paymentDone && "z-0"} w-full flex flex-col items-center gap-y-2  m-auto gap-x-5 md:gap-y-2 px-[2%]  `}>
          <div className=" flex flex-col items-center m-auto">
            <h2 className="font-bold py-4 px-4 lg:px-[10%] text-center text-2xl lg:text-4xl">
              <span className="text-green-700">Manchester</span> Airport Taxi & Airport  <span className="text-green-700">Transfers</span>
            </h2>
            <Image
              src={heroSection.backgroundImage}
              alt="Hero Image"
              className="w-full lg:w-[30%] flex lg:hidden"
            />
          </div>
          <div className="container h-full flex flex-col align-middle items-center justify-center lg:flex-row gap-y-5 lg:gap-x-5">
            <div className="w-full px-5 lg:w-[70%] h-auto   custom-scrollbar my-5 lg:my-0">
              <BookingForm />
            </div>

            {/* <div className="w-full lg:w-[30%] flex items-center m-auto justify-center">
                    <HeroCard/>
                </div> */}
          </div>
        </div>

      </div>
      <AirportTransportation/>

      <div className="w-full bg-gray-50">
        {/* <div className="">
                <TripWorking/>
            </div> */}
        <div className="">
          <BookingProcess />
        </div>
      </div>
      <PremiumTransportation/>
        <ServiceCard />
        {/* <OurStory/> */}
      <WhyChooseOktaxis/>
        <WhyChooseUs />
     

      <div className="w-full flex items-center justify-center py-12 md:py-16 lg:py-20">
        <Testimonials />

      </div>
      <div className="w-full flex items-center justify-center py-12 md:py-16 lg:py-20">
        <FAQSection />

      </div>

    </main>
  );
};

export default Home;
