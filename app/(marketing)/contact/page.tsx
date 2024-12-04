"use client"

import ContactForm from "@/components/ContactForm/ContactForm"
import { homePageData } from "@/constants/homePageData"

const Contact = () => {
  const { title, subtitle, description } = homePageData.contactFormSection;

  return (
    <div className="w-full flex flex-col items-center py-[2%]">

      <div className="w-full lg:w-1/2 rounded-lg shadow-lg border-none flex flex-col items-center py-[2%]">
        <div className="flex flex-col justify-center items-center w-full lg:w-2/3 text-center px-[2%] gap-y-2 pb-[2%]">
          <h1 className="text-xs font-semibold text-gray-600">{subtitle}</h1>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm font-medium text-gray-500" >{description}</p>
          
        </div>

        <div className="w-full lg:w-2/3 px-[2%]">
          <ContactForm/>
        </div>
      </div>


    </div>
  )
}

export default Contact