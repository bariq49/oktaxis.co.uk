import { useFormikContext } from "formik";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BMW from "@/assets/vehicles/bmw.jpg";
import MERC from "@/assets/vehicles/merc.jpg";
import Skoda from "@/assets/vehicles/skoda.jpg";
import Tesla from "@/assets/vehicles/tesla.jpg";
import Toyota from "@/assets/vehicles/toyota.jpeg";
import XLVan from "@/assets/vehicles/xlvan.jpg";

interface Car {
  image: StaticImageData;
  title: string;
  seats: number;
  bags: number;
  category: string;
}

const CarList: Car[] = [
  {
    image: Toyota,
    title: "Toyota Prius",
    category: "Economy",
    seats: 4,
    bags: 3,
  },
  {
    image: Skoda,
    title: "Skoda Octavia",
    category: "Economy",
    seats: 4,
    bags: 3,
  },
  {
    image: BMW,
    title: "BMW 5 Series",
    category: "Executive",
    seats: 4,
    bags: 3,
  },
  {
    image: MERC,
    title: "MERC E Class",
    category: "Executive",
    seats: 4,
    bags: 3,
  },
  {
    image: Tesla,
    title: "Tesla Model S",
    category: "Executive Premium",
    seats: 4,
    bags: 3,
  },
  {
    image: XLVan,
    title: "XL Passenger Van",
    category: "Executive Premium",
    seats: 6,
    bags: 6,
  },
];

export const fareStructure: Record<string, any> = {
  Economy: {
    baseFare: 5,
    perMile: 1.3,
    tiers: [
      { maxMiles: 10, flatRate: 25 },
      { maxMiles: 20, flatRate: 35 },
      { maxMiles: Infinity, flatRate: 45 },
    ],
  },
  Executive: {
    baseFare: 7,
    perMile: 1.45,
    tiers: [
      { maxMiles: 10, flatRate: 35 },
      { maxMiles: 20, flatRate: 45 },
      { maxMiles: Infinity, flatRate: 55 },
    ],
  },
  "Executive Premium": {
    baseFare: 10,
    perMile: 1.6,
    tiers: [
      { maxMiles: 10, flatRate: 45 },
      { maxMiles: 20, flatRate: 65 },
      { maxMiles: Infinity, flatRate: 75 },
    ],
  },
};

interface VehicleSelectorProps {
  onBookNow: () => void;
  distance: number; // Distance in miles
}

export default function VehicleSelector({
  onBookNow,
  distance,
}: VehicleSelectorProps) {
  const { values ,setFieldValue } = useFormikContext<any>();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const calculatePrice = (category: string, distance: number): number => {
    const fareDetails = fareStructure[category];
    if (!fareDetails) return 0;

    for (const tier of fareDetails.tiers) {
      if (distance <= tier.maxMiles) {
        return tier.flatRate;
      }
    }

    // Fallback: Base fare + per-mile rate
    return fareDetails.baseFare + distance * fareDetails.perMile;
  };

  const handleBookNow = (
    vehicleTitle: string,
    seats: number,
    bags: number,
    category: string
  ) => {
    setSelectedVehicle(vehicleTitle);
    setFieldValue("selectedVehicle", vehicleTitle);
    setFieldValue("seats", seats);
    setFieldValue("bags", bags);
    setFieldValue("category", category);
    onBookNow();
  };

  return (
    <div className="w-full">
      <div className="w-full px-2 md:px-0 md:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CarList.map((car, index) => {
            const price = calculatePrice(car.category, values.distance);

            return (
              <Card
                key={index}
                className="w-full hover:shadow-2xl flex flex-col justify-between"
              >
                <CardHeader className="p-2 flex text-center gap-0">
                  <CardTitle className="text-lg font-semibold">
                    {car.title}
                  </CardTitle>
                  <CardTitle className="text-sm font-medium text-gray-500 leading-none">
                    {car.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Image
                    src={car.image}
                    alt={car.title}
                    className="w-full h-auto mb-4 rounded"
                  />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <UserRound className="w-4 h-4 mr-1" />
                      <span className="text-sm">{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center">
                      <UserRound className="w-4 h-4 mr-1" />
                      <span className="text-sm">{car.bags} Bags</span>
                    </div>
                  </div>
                  <div className="text-center mt-2 font-medium">
                    Price: £{price.toFixed(2)}
                  </div>
                </CardContent>
                <CardFooter className="p-2 pt-0">
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={() =>
                      handleBookNow(car.title, car.seats, car.bags, car.category)
                    }
                    disabled={selectedVehicle === car.title}
                  >
                    {selectedVehicle === car.title ? "Selected" : "Select"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
