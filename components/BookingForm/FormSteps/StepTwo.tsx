import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import VehicleSelector, { fareStructure } from "../VehicleSelector/VehicleSelector";
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
  const [showHeader, setShowHeader] = useState(false);
  

  const calculatePrice = (category: string, distance: number): number => {
    if (!category || distance <= 0) {
      console.error("Invalid category or distance", { category, distance });
      return 0;
    }
    
    const fareDetails = fareStructure[category];
    if (!fareDetails) {
      console.error("No fare details found for category:", category);
      return 0;
    }
    
    for (const tier of fareDetails.tiers) {
      if (distance <= tier.maxMiles) {
        return tier.flatRate;
      }
    }

    return fareDetails.baseFare + distance * fareDetails.perMile;
  };

  const handleBookNow = () => {
    if (isEditing) {
      setShowSummary(true);
      setIsEditing(false);
    } else {
      setShowSummary(true);
      setShowHeader(true);
      setCompletedSteps((prev: any) => ({ ...prev, Step2: true }));
    }
  };

  const handleEdit = () => {
    setShowSummary(false);
    setIsEditing(true);
    onEdit();
  };

  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  useEffect(() => {
    const distance = values.distance || 0;
    const selectedCategory = values.category || null;
    const totalPrice = selectedCategory
      ? calculatePrice(selectedCategory, distance)
      : null;

    if (totalPrice !== null) {
      setFieldValue("totalPrice", totalPrice);
    }
  }, [values.distance, values.category, setFieldValue]);

    // console.log("Fare Structure:", fareStructure);
    // console.log("Selected Category:", values.category);
    // console.log("selected Distance:", values.distance);
    // console.log("Category:", selectedCategory);
    // console.log("Distance:", distance);
    // console.log("Total Price:", totalPrice);


  return (
    <div className="w-full flex flex-col gap-y-3">
      {showHeader && (
        <div className="w-[350px] lg:w-full h-12 rounded-lg bg-gray-800 text-white flex items-center justify-between px-3">
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
        <VehicleSelector 
          onBookNow={handleBookNow} 
          distance={values.distance}
        />
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
