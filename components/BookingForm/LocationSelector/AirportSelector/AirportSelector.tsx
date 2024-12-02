import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AirportSelector({
  onSelect,
}: {
  onSelect: (airport: string) => void;
}) {
  const [selectedAirport, setSelectedAirport] = useState("");

  const airports = [
    "Manchester Airport",
    "Liverpool John Lennon Airport",

  ];

  const handleAirportChange = (airport: string) => {
    setSelectedAirport(airport); // Update local state
    onSelect(airport); // Call parent's callback to update Formik
  };

  return (
    <div className="w-full">
      <Select
        value={selectedAirport}
        onValueChange={handleAirportChange}
      >
        <SelectTrigger className="lg:w-[70%] w-full bg-white py-7 pl-3 md:pl-3 flex rounded-lg focus:ring-0 border-none shadow-none">
          <SelectValue
            placeholder="Select Airport"
            className="text-sm text-gray-500 "
          />
        </SelectTrigger>
        <SelectContent>
          {airports.map((airport) => (
            <SelectItem
              key={airport}
              value={airport}
              className="cursor-pointer focus:bg-gray-800 focus:text-white outline-none focus-visible:ring-0"
            >
              <span className="block py-2 px-1 hover:text-white rounded-lg transition-colors">
                {airport}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
