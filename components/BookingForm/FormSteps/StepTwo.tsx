import { useState } from "react";
import { Button } from "@/components/ui/button";
import VehicleSelector from "../VehicleSelector/VehicleSelector";
import { useFormikContext } from "formik";
import StepTwoSummary from "./StepSummaries/StepTwoSummary";

interface StepTwoProps {
  isActive: boolean;
  isCompleted: boolean;
  onComplete: () => void;
  onEdit: () => void;
}

export default function StepTwo({
  isActive,
  isCompleted,
  onComplete,
  onEdit,
}: StepTwoProps) {
  const { values, setFieldValue } = useFormikContext<any>();
  const [showSummary, setShowSummary] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleBookNow = () => {
    setShowSummary(true); // Show summary once vehicle is selected
    onComplete();
  };

  const handleEdit = () => {
    setShowSummary(false); // Return to vehicle selection
    setFieldValue("selectedVehicle", null); // Reset selected vehicle
    onEdit();
  };

  // Toggle function for the heading
  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="w-full h-16 bg-gray-950 hover:bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 text-white flex align-middle px-3 justify-between">
        <h1 
            className="flex items-center capitalize text-lg font-bold tracking-wider cursor-pointer"
            onClick={handleToggleSummary}
        >
          Step Two: Vehicle Selection
        </h1>
        {isCompleted && handleEdit  && (
          <Button
            onClick={handleEdit}
            className="bg-white text-gray-950 hover:bg-white px-6 py-3.5 h-0 mt-4"
          >
            Edit
          </Button>
        )}
      </div>

      {isActive && !showSummary ? (
        <VehicleSelector onBookNow={handleBookNow} />
      ) : (
        showSummary && (
            <StepTwoSummary
              selectedVehicle={values.selectedVehicle}
              seats={values.seats}
              bags={values.bags}
            />
        )
      )}
    </div>
  );
}
