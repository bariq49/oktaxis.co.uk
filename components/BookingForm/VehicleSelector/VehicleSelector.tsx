import { useFormikContext } from "formik";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaUser } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MinivanImage from "@/assets/minivan.jpg";
import SedanImage from "@/assets/seden.jpg";
import CompactImage from "@/assets/suv.jpg";

interface Car {
  image: StaticImageData;
  title: string;
  seats: number;
  bags: number;
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
];

interface VehicleSelectorProps {
  onBookNow: () => void;
}

export default function VehicleSelector({ onBookNow }: VehicleSelectorProps) {
  const { setFieldValue } = useFormikContext<any>();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const handleBookNow = (vehicleTitle: string, seats: number, bags: number) => {
    setSelectedVehicle(vehicleTitle);
    setFieldValue("selectedVehicle", vehicleTitle);
    setFieldValue("seats", seats);
    setFieldValue("bags", bags);
    onBookNow(); // Trigger step change
  };

  return (
    <div className="w-full">
      <div className="w-full px-2 md:px-0 md:max-w-6xl mx-auto">
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {CarList.map((car, index) => (
            <Card
              key={index}
              className="w-full md:w-1/2 hover:shadow-2xl flex flex-col justify-between"
            >
              <CardHeader className="p-2 flex text-center m-auto">
                <CardTitle className="text-xl font-semibold">{car.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 md:m-0">
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
              </CardContent>
              <CardFooter className="p-2 pt-0">
                <Button
                  className="w-1/2 m-auto md:w-full bg-gray-950 hover:bg-gray-900"
                  onClick={() => handleBookNow(car.title, car.seats, car.bags)}
                  disabled={selectedVehicle === car.title}
                >
                  {selectedVehicle === car.title ? "Booked" : "Book Now"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
