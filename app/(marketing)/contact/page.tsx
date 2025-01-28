"use client"

import ContactForm from "@/components/ContactForm/ContactForm"
import { homePageData } from "@/constants/homePageData"

const Contact = () => {
  const { title, subtitle, description } = homePageData.contactFormSection;

  return (
    <div className="w-full flex flex-col gap-14 items-center py-[2%]">

      <div className="flex flex-col gap-5 w-full">
        <div className="md:text-5xl text-4xl font-semibold md:font-bold  text-center ">Contact Us</div>
        <div className="max-w-screen-lg text-gray-700 mx-auto text-center md:text-lg">{description}
        </div>
        <div className="w-full p-3">

        <div className="grid md:grid-cols-3 gap-8 p-4 bg-white shadow-lg border border-gray-200 max-w-screen-lg mx-auto w-full ">
          <div className="flex flex-col gap-2 w-full items-center justify-center text-center">
               <div className="text-xl font-semibold">Phone</div>
               <div className="text-gray-800">Call us 24/7 at</div>
               <div className="font-semibold text-green-700">447342193341</div>
          </div>
          <div className="flex flex-col gap-2 w-full items-center justify-center text-center">
               <div className="text-xl font-semibold">Email</div>
               <div className="text-gray-800">Send us an email at</div>
               <div className="font-semibold text-green-700">info@oktaxis.co.uk</div>
          </div>
          <div className="flex flex-col gap-2 w-full items-center justify-center text-center">
               <div className="text-xl font-semibold">Online Form</div>
               <div className="text-gray-800">Fill out our contact form for a quick response.</div>
          </div>
        </div>
      </div>
        </div>

      <div className="w-full lg:w-1/2 rounded-lg shadow-lg border-none flex flex-col items-center py-[2%]">
        <div className="flex flex-col justify-center items-center w-full lg:w-2/3 text-center px-[2%] gap-y-2 pb-[2%]">
          <h1 className="text-4xl font-bold">{subtitle}</h1>

        </div>

        <div className="w-full lg:w-2/3 px-[2%]">
          <ContactForm />
        </div>
      </div>


    </div>
  )
}

export default Contact