import React from "react";
import { Car } from "lucide-react";

interface StepTwoSummaryProps {
  selectedVehicle: string | null;
  seats: number | null;
  bags: number | null;
}

const StepTwoSummary = ({
  selectedVehicle,
  seats,
  bags,
}: StepTwoSummaryProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 space-y-4">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Vehicle Info Summary</h2>

      <div className="flex items-center gap-2">
        <Car className="text-gray-500" />
        <p className="font-semibold">Selected Vehicle:</p>
        <span>{selectedVehicle || "No Vehicle Selected"}</span>
      </div>

      <div className="flex items-center gap-2">
        <p className="font-semibold">Seats:</p>
        <span>{seats !== null ? seats : "Not Specified"}</span>
      </div>

      <div className="flex items-center gap-2">
        <p className="font-semibold">Bags:</p>
        <span>{bags !== null ? bags : "Not Specified"}</span>
      </div>
    </div>
  );
};

export default StepTwoSummary;
