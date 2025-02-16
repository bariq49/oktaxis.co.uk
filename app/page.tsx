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
import HeroImage from "@/assets/homeImages/about-us-bg-img.webp"
import Link from "next/link";


const Home = () => {
  const { heroSection } = homePageData;
  const [paymentDone, setPaymentDone] = useState(false)
  
  return (
    <main className={`w-full  ${paymentDone && "overflow-hidden h-screen"}`}>
      <Suspense><PaymentDone setPaymentDone={setPaymentDone} paymentDone={paymentDone}/></Suspense>
      {/* Hero Section */}
      <div className="w-full text-center relative bg-[#97572B] z-50 overflow-hidden h-[90vh]">
      <Image
        src={HeroImage}
        quality={60}
        alt="backgorund"
        className="w-full h-full object-cover absolute object-center "
      />
      <div className="relative w-full h-full bg-black/40 top-0 left-0 min-h-full py-10 flex items-center justify-center z-[99] ">
        <div className="w-full flex items-start justify-center flex-col gap-5 max-w-screen-2xl mx-auto px-3 sm:px-5 ">
          <div className="text-center sm:text-start w-full">
            <div className=" text-white text-4xl md:leading-[75px] md:text-7xl font-bold ">
            OkTaxis Offers Luxury
            </div>
            <div className="text-white text-4xl md:leading-[75px] md:text-7xl font-bold ">
            Transport All Over The UK
            </div>
          </div>

           <Link
            href="/booking"
            className="px-10 sm:px-12 py-1 font-semibold sm:font-bold rounded-sm  max-sm:mx-auto bg-brandColor text-white stext-lg border-2  border-brandColor hover:text-brandColor hover:bg-transparent transition-all duration-300 sm:text-xl "
          >
            Book Your Ride Now
          </Link>
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
