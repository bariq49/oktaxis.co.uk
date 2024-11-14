import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useFormikContext } from "formik";
import BookingTypeOption from "../BookingTypeSelector/BookingTypeOption";
import CustomDateSelector from "../DateAndTimeSelector/CustomDateSelector";
import CustomTimeSelector from "../DateAndTimeSelector/CustomTimeSelector";
import DropOffAddressInput from "../LocationSelector/DropOffAddressInput";
import PickUpAddressInput from "../LocationSelector/PickUpAddressInput";
import StepOneSummary from "./StepSummaries/StepOneSumary";

interface StepOneProps {
  isActive: boolean;
  isCompleted: boolean;
  onComplete: () => void;
  onEdit: () => void;
}

export default function StepOne({
  isActive,
  isCompleted,
  onComplete,
  onEdit,
}: StepOneProps) {
  const { values } = useFormikContext<any>();

  const [isEditing, setIsEditing] = useState(false);
  const [showSummary, setShowSummary] = useState(true); 

  // Toggle function for the heading
  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  return (
    <div className={`w-full flex flex-col gap-y-3 ${isActive ? "" : "opacity-90"}`}>
      <div className="w-full h-16 bg-gray-950 hover:bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 text-white flex align-middle items-center px-3 justify-between">
        <h1 
            className="flex items-center capitalize text-lg font-bold tracking-wider cursor-pointer"
            onClick={handleToggleSummary}
        >
          Step One: Ride Info
        </h1>
        {isCompleted && !isEditing && (
          <Button
            onClick={() => {
              setIsEditing(true);
              onEdit();
            }}
            className="bg-white text-gray-950 hover:bg-white px-6 py-3.5 h-0"
          >
            Edit
          </Button>
        )}
      </div>

      {/* Show Form Fields if Editing, otherwise show Summary */}
      {isActive && (isEditing || !isCompleted) ? (
        <>
          <div className="flex md:flex-row flex-col gap-y-3">
            <div>
              <BookingTypeOption />
            </div>
            <div className="flex flex-col gap-3">
              <PickUpAddressInput />
              <DropOffAddressInput />
              <div className="flex w-full gap-x-3 flex-wrap md:flex-nowrap gap-y-3">
                <CustomTimeSelector />
                <CustomDateSelector />
              </div>
            </div>
          </div>
          <Button
            className="p-6 bg-gray-950 hover:bg-gray-800 text-white rounded-lg"
            onClick={() => {
              setIsEditing(false);
              onComplete();
            }}
          >
            {isEditing ? "Save Changes" : "Select Vehicle"}
          </Button>
        </>
      ) : (
        showSummary && (

            <StepOneSummary
              bookingType={values.bookingType}
              pickUpAddress={values.pickUpAddress}
              dropOffAddress={values.dropOffAddress}
              stops={values.stops}
              date={values.date}
              time={values.time}
            />
        )
      )}
    </div>
  );
}
