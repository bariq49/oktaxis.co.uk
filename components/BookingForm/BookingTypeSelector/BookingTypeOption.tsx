// this component is dedicated for showing booking options based onthe user-selection...
// THERE ARE FOUR OPTIONS LIKE:

// To Airport ----> autocomplete in TO-INPUT FIELD..
// From Airport ----> autocomplete option in FROM-INPUT FIELD..
// Point to Point ----> no-autocomplete card manually add the address..
// Hourly Charter ----> manually add the address + show dropdown hour's list which show the 24 HRS..

import { Check } from "lucide-react"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import HourlyCharterSelection from "./HourlyCharterSelection"

const  BookingTypeOption = () => {
  const [selected, setSelected] = useState("hourly")

  return (
    <div className="w-full md:w-[230px] md:max-w-[250px] md:pr-3 px-0">
      <RadioGroup
        defaultValue="hourly"
        onValueChange={setSelected}
        className="flex flex-col gap-y-3"
      >
        <div className="relative">
          <Label
            htmlFor="to"
            className={`flex gap-x-3 items-center w-full px-4 py-[19px] rounded-lg cursor-pointer border ${
              selected === "to"
                ? "bg-gray-950 text-white"
                : "bg-white hover:bg-gray-800 hover:text-white"
            }`}
          >
            <RadioGroupItem value="to" id="to" className="sr-only" />
            <span className={`w-4 h-4 rounded-full ${selected === "to" ? 'bg-gray-500 flex items-center justify-center' : 'bg-gray-500'}`}>
              {selected === "to" && <Check className="w-10 h-10 text-white font-bold" />}
            </span>
            To Airport
          </Label>
          {/* {selected === "to" && (
            <div className="absolute left-full ml-2 top-0 w-64">
              <Input
                placeholder="Enter destination address"
                className="w-full bg-white border-gray-300"
              />
            </div>
          )} */}
        </div>

        <Label
          htmlFor="from"
          className={`flex gap-x-3 items-center w-full px-4 py-[19px] rounded-lg cursor-pointer border ${
            selected === "from"
              ? "bg-gray-950 text-white"
              : "bg-white hover:bg-gray-800 hover:text-white"
          }`}
        >
          <RadioGroupItem value="from" id="from" className="sr-only" />
          <span className={`w-4 h-4 rounded-full ${selected === "from" ? 'bg-gray-500 flex items-center justify-center' : 'bg-gray-500'}`}>
            {selected === "from" && <Check className="w-10 h-10 text-white font-bold" />}
          </span>
          From Airport
        </Label>

        <Label
          htmlFor="point"
          className={`flex gap-x-3 items-center w-full px-4 py-[19px] rounded-lg cursor-pointer border ${
            selected === "point"
              ? "bg-gray-950 text-white"
              : "bg-white hover:bg-gray-800 hover:text-white"
          }`}
        >
          <RadioGroupItem value="point" id="point" className="sr-only" />
          <span className={`w-4 h-4 rounded-full ${selected === "point" ? 'bg-gray-500 flex items-center justify-center' : 'bg-gray-500'}`}>
            {selected === "point" && <Check className="w-10 h-10 text-white font-bold" />}
          </span>
          Point to Point
        </Label>

        <Label
          htmlFor="hourly"
          className={`flex gap-x-3 items-center w-full px-4 py-[19px] rounded-lg cursor-pointer border ${
            selected === "hourly"
              ? "bg-gray-950 text-white"
              : "bg-white hover:bg-gray-800 hover:text-white"
          }`}
        >
          <RadioGroupItem value="hourly" id="hourly" className="sr-only" />
          <span className={`w-4 h-4 rounded-full ${selected === "hourly" ? 'bg-gray-500 flex items-center justify-center' : 'bg-gray-500'}`}>
            {selected === "hourly" && <Check className="w-10 h-10 text-white font-bold" />}
          </span>
          Hourly Charter
        </Label>
         {selected === "hourly" && <HourlyCharterSelection/>}
      </RadioGroup>
    </div>
  )
}

export default BookingTypeOption;