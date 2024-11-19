import { useState } from "react";
import { Button } from "@/components/ui/button";
import VehicleSelector from "../VehicleSelector/VehicleSelector";
import { useFormikContext } from "formik";
import StepTwoSummary from "./StepSummaries/StepTwoSummary";

interface StepTwoProps {
  isActive: boolean;
  completedSteps: any;
  setCompletedSteps: any;
  onEdit: () => void;
}

export default function StepTwo({
  isActive,
  completedSteps,
  setCompletedSteps,
  onEdit,
}: StepTwoProps) {
  const { values, setFieldValue } = useFormikContext<any>();
  const [showSummary, setShowSummary] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showHeader, setShowHeader] = useState(false); // New state for header visibility

  const handleBookNow = () => {
    if (isEditing) {
      // If editing, just show the summary without changing steps
      setShowSummary(true);
      setIsEditing(false); // Exit editing mode
    } else {
      // Normal flow when not editing
      setShowSummary(true);
      setShowHeader(true); // Show the header after completing the step
      setCompletedSteps((prev: any) => ({ ...prev, Step2: true }));
    }
  };

  const handleEdit = () => {
    setShowSummary(false); // Return to vehicle selection
    setIsEditing(true); // Enter editing mode
    onEdit(); // Set this step back to active
  };

  // Toggle function for the summary visibility
  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-y-3">
      {/* Step Header */}
      {showHeader && (
        <div className="w-full h-12 rounded-lg bg-gray-800 text-white flex items-center justify-between px-3">
          <h1
            className={`capitalize text-[15px] lg:text-lg font-medium tracking-wider cursor-pointer ${
              !isActive ? "opacity-100" : ""
            }`}
            onClick={handleToggleSummary}
          >
            Step 2: Vehicle Selection
          </h1>
          {completedSteps.Step2 && !isEditing && (
            <Button
              onClick={handleEdit}
              className="bg-white text-gray-950 hover:bg-white px-6 py-3.5 h-0"
            >
              Edit
            </Button>
          )}
        </div>
      )}

      {/* Step 2 Content */}
      {((completedSteps.Step1 && !completedSteps.Step2) || isEditing) && (
        <VehicleSelector onBookNow={handleBookNow} />
      )}

      {/* Show summary only when not editing and showSummary is true */}
      {!isEditing && showSummary && (
        <StepTwoSummary
          selectedVehicle={values.selectedVehicle}
          seats={values.seats}
          bags={values.bags}
          category={values.category}
        />
      )}
    </div>
  );
}
