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
  onScrollToStep: () => void;
}

export default function StepTwo({
  isActive,
  completedSteps,
  setCompletedSteps,
  onEdit,
  onScrollToStep 
}: StepTwoProps) {
  const { values, setFieldValue } = useFormikContext<any>();
  const [showSummary, setShowSummary] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const handleBookNow = () => {
    setShowSummary(true);
    setIsEditing(false);
    setShowHeader(true);
    setCompletedSteps((prev: any) => ({ ...prev, Step2: true }));
    onScrollToStep();
  };

  const handleEdit = () => {
    setShowSummary(false);
    setIsEditing(true);
    onEdit();
  };

  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-y-3 items-center">
      {showHeader && (
        <div className="w-[320px] lg:w-full h-12 rounded-lg bg-gray-800 text-white flex align-middle items-center justify-between px-3">
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

      {((completedSteps.Step1 && !completedSteps.Step2) || isEditing) && (
        <VehicleSelector onBookNow={handleBookNow} />
      )}

      {!isEditing && showSummary && (
        <StepTwoSummary
          selectedVehicle={values.selectedVehicle}
          seats={values.seats}
          bags={values.bags}
          category={values.category}
          totalPrice={values.totalPrice}
        />
      )}
    </div>
  );
}
