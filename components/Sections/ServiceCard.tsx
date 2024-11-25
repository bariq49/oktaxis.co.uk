import Image from "next/image"
import Link from "next/link"
import { homePageData } from "@/constants/homePageData"


interface Service {
  title: string
  image: string
  href: string
  description: string
}

export default function ServiceCard() {
    const { servicesSection } = homePageData; 
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <p className="text-muted-foreground">Affordable Transportation Services we offer</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesSection.services.map((service, index) => (
          <div
            key={index}
            // href={service.href}
            className="group relative h-[300px] overflow-hidden rounded-lg"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 transition-opacity duration-300 opacity-100 group-hover:opacity-90" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="relative bg-[#1a3f47] py-2 px-4 inline-flex items-center mb-2 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <div className="absolute right-0 top-0 h-full w-3 bg-white transform translate-x-1/2 skew-x-[20deg]" />
              </div>
              <p className="text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}

