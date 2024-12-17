import { homePageData } from "@/constants/homePageData"; 
import Image from "next/image";


export default function VehicleGrid() {
  const { bgImg, serviceName, title, fleet } = homePageData.ourFleets || []; 

  return (
    <>
        <div 
            className="w-full h-[20vh] lg:h-[50vh] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url('${bgImg.src}')`
            }}
            
        >
            <h1 className="text-lg lg:text-2xl font-semibold text-green-300">
                {/* {serviceName} */}
                Oktaxis
            </h1>
            <h1 className="text-3xl lg:text-5xl font-semibold text-green-400">{title}</h1>



        </div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fleet.map((fleet, index) => (
                    <div
                        key={index}
                        className="block group"
                    >
                        <div className="bg-white border border-gray-200 rounded-sm p-8 transition-shadow hover:shadow-lg">
                        <div className="relative h-48 mb-6">
                            <Image
                            src={fleet.image}
                            alt={fleet.name}
                            fill
                            className="object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl text-[#006D77] font-medium relative inline-block">
                            {fleet.name}
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#006D77] transform scale-x-0 transition-transform group-hover:scale-x-100" />
                            </h3>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    
    </>
  );
}
