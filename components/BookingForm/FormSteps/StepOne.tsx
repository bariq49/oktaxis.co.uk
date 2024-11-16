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
  completedSteps: any;
  setCompletedSteps: any;
  onEdit: () => void;
}

export default function StepOne({
  isActive,
  completedSteps,
  setCompletedSteps,
  onEdit,
}: StepOneProps) {
  const { values, errors, validateForm } = useFormikContext<any>();

  const [isEditing, setIsEditing] = useState(false);
  const [showSummary, setShowSummary] = useState(true);

  // State to determine which airport selector to show
  const [airportSelectorFor, setAirportSelectorFor] = useState<"to" | "from" | null>(null);

  // Toggle function for the heading
  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  // Function to validate all required fields
  const validateAllFields =  () => {
    const validationErrors =  validateForm();

    // Check if required fields have values
    const areFieldsFilled = values.bookingType && values.pickUpAddress && values.dropOffAddress && values.date && values.time;

    // If there are validation errors or missing fields, do not proceed
    if (Object.keys(validationErrors).length > 0 || !areFieldsFilled) {
      return false;
    }

    return true;
  };

  // Function to handle validation and next step
  const handleValidationAndNextStep = () => {
    const isValid =  validateAllFields();

    if (isValid) {
      setIsEditing(false);
      setCompletedSteps((prev:any)=>({...prev,Step1:true})) // Move to next step
    } else {
      console.log(isValid ,"Please fill in all required fields correctly.");
    }
  };

  return (
    <div className={`w-full flex flex-col gap-y-3 ${isActive ? "" : "opacity-90"}`}>
      <div className="w-full h-16 bg-gray-950 hover:bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 text-white flex align-middle items-center px-3 justify-between">
        <h1
          className={`capitalize text-lg font-medium tracking-wider cursor-pointer ${
            !isActive ? "opacity-70" : ""
          }`}
          onClick={handleToggleSummary}
        >
          Step One: Ride Info
        </h1>
        {completedSteps.Step1 && !isEditing && (
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
      {isActive && (isEditing || !completedSteps.Step1) ? (
        <>
          <div className="flex md:flex-row flex-col gap-y-3">
            <div>
              <BookingTypeOption onAirportSelectChange={setAirportSelectorFor} />
            </div>
            <div className="flex flex-col gap-3">
              <PickUpAddressInput showAirportSelector={airportSelectorFor === "from"} />
              <DropOffAddressInput showAirportSelector={airportSelectorFor === "to"} />
              <div className="flex w-full gap-x-3 flex-wrap md:flex-nowrap gap-y-3">
                <CustomTimeSelector />
                <CustomDateSelector />
              </div>
            </div>
          </div>
          <Button
            className="p-4 bg-green-600 hover:bg-green-500 text-white rounded-lg mt-4"
            onClick={handleValidationAndNextStep}
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
            hourlyCharter={values.hourlyCharter}
          />
        )
      )}
    </div>
  );
}
