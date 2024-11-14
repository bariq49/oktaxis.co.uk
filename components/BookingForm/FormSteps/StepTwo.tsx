// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import VehicleSelector from "../VehicleSelector/VehicleSelector";


export default function StepTwo () {
    return(
        <div className="w-full flex flex-col gap-y-3">
            <div className="w-full h-16 bg-gray-950 hover:bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 text-white flex align-middle px-3">
                <h1 className="flex items-center capitalize text-lg font-bold tracking-wider">Step Two</h1>
            </div>
            <div className="flex md:flex-row flex-col gap-y-3">
                <VehicleSelector/>
            </div>
                <Button
                    className="p-6 bg-gray-950 hover:bg-gray-800 text-white rounded-lg"
                >
                    Select Passengers
                </Button>

        </div>
    )
}