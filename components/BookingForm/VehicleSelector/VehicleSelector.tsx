"use client" 
import React, { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { FaUser } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import MinivanImage from "@/assets/minivan.jpg"
import SedanImage from "@/assets/seden.jpg"
import CompactImage from "@/assets/suv.jpg"

interface Car {
  image: StaticImageData
  title: string
  seats: number
  bags: number
}

const CarList: Car[] = [
  {
    image: SedanImage,
    title: "Sedan",
    seats: 3,
    bags: 2,
  },
  {
    image: MinivanImage,
    title: "Minivan",
    seats: 5,
    bags: 5,
  },
  {
    image: CompactImage,
    title: "Luxury SUV",
    seats: 6,
    bags: 6,
  },
]

export default function VehicleSelector() {
  const [prices, setPrices] = useState<Record<string, number>>({}) 

    // Reset prices when key parameters like from/to or distance change...
    // useEffect(() => {
    //   setPrices({}); 
    // }, [from, to, distance]);

  // Recalculate prices when the distance or hours change...
//   useEffect(() => {

//     const newPrices: Record<string, number> = {};
//     CarList.forEach(car => {
//       newPrices[car.title] = calculatePrice(car);
//     });
    
//     setPrices(newPrices);
//   }, [distance, hours]);


  // Function to calculate price based on distance and hourly charges...
//   function calculatePrice(car: Car): number {
//     let calculatedPrice = 0;

//     if (distance) {
//       // Distance-based pricing logic...
//       if (car.title === "Luxury SUV") {
//         calculatedPrice = distance <= 5 ? 90 : 90 + (distance - 5) * 3;
//       } else if (car.title === "Minivan") {
//         calculatedPrice = distance <= 15 ? 65 : 65 + (distance - 15) * 2;
//       } else if (car.title === "Sedan") {
//         calculatedPrice = distance <= 12 ? 60 : 60 + (distance - 12) * 1.50;
//       }

//       // Extra charge for children or infants...
//       const childrenCount = Number(children) || 0;
//       const infantsCount = Number(infants) || 0;
//       if (childrenCount > 0 || infantsCount > 0) {
//         const extraPassengerFee = 10;
//         calculatedPrice += (childrenCount + infantsCount) * extraPassengerFee;
//       }

//       // Double price if it's a return trip...
//       if (selectedOption === "return") {
//         calculatedPrice *= 2;
//       }
//     }

//     return +calculatedPrice.toFixed(2);
//   }


  // Function to handle booking logic...
  function handleBookNow(car: Car) {
   
  }

  return (
    <>

      {/* Main Section for Car Listing */}
      <div className="w-full">
        <div className="w-full px-2 md:px-0 md:max-w-6xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            {CarList.map((car, index) => (
              <Card key={index} className="w-full md:w-1/2 hover:shadow-2xl flex flex-col justify-between">
                <CardHeader className="p-2 flex text-center m-auto">
                  <CardTitle className="text-xl font-semibold">
                    {car.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className=" pt-0 md:m-0">
                  <Image
                    src={car.image}
                    alt={car.title}
                    className="w-[60%] h-auto mb-4 rounded m-auto"
                  />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <FaUser className="w-4 h-4 mr-1" />
                      <span className="text-sm">{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center md:m-0">
                      <FaUser className="w-4 h-4 mr-1" />
                      <span className="text-sm">{car.bags} Bags</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-2xl m-auto font-bold text-[#6a6a6a]">
                    {/* ${prices[car.title] ?? 0} */}
                  </div>
                </CardContent>
                <CardFooter className="p-2 pt-0">
                  <Button 
                    className="w-1/2 m-auto  md:w-full bg-gray-950 hover:bg-gray-900 "
                    // onClick={() => handleBookNow(car)}
                  >
                    Select Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
