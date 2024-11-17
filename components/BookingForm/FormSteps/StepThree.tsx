import { useState } from "react";
import { Button } from "@/components/ui/button";
import PassengerInfo from "../PassengerPersonalInfo/PassengerInfo";
import { DialogTitle, Dialog, DialogContent } from "@/components/ui/dialog";
import PaymentCardModal from "../PaymentCardModal/PaymentCardModal";
import { useFormikContext } from "formik";
import StepThreeSummary from "./StepSummaries/StepThreeSummary";
import ChildCount from "../PassengerAndLuggageSelector/ChildCount";
import { Textarea } from "@/components/ui/textarea";
import { TextareaInstruction } from "../PassengerPersonalInfo/TextArea";

interface StepThreeProps {
  isActive: boolean;
  completedSteps: any;
  setCompletedSteps: any;
  onEdit: () => void;
}

export default function StepThree({
  isActive,
  completedSteps,
  setCompletedSteps,
  onEdit,
}: StepThreeProps) {
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showSummary, setShowSummary] = useState(false); // Initially false to hide the summary

  const { values } = useFormikContext<any>();

  const handleOpenDialog = () => setPaymentDialogOpen(true);
  const handleCloseDialog = () => setPaymentDialogOpen(false);

  const handleBookNow = () => {
    if (isEditing) {
      // If editing, show summary without changing steps
      setShowSummary(true);
      setIsEditing(false); // Exit editing mode
    } else {
      // Normal flow when not editing
      setShowSummary(true);
      setCompletedSteps((prev: any) => ({ ...prev, Step3: true }));
    }
  };

  // Toggle function for the heading
  const handleToggleSummary = () => {
    setShowSummary((prev) => !prev);
  };
  

  return (
    <div className="w-full flex flex-col gap-y-3">
      {/* Step Three Header */}
      <div className="w-full h-12 bg-gray-800 text-white text-lg rounded-lg flex items-center justify-between px-3">
        <h1 
          className={`capitalize text-lg font-medium tracking-wider cursor-pointer ${
            !isActive ? "opacity-100" : ""
          }`}
          onClick={handleToggleSummary}
      >
          Step Three: Passenger Details
        </h1>
        {completedSteps.Step3 && !isEditing && (
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

      {/* Step Three Content */}
{((completedSteps.Step2 && !completedSteps.Step3) || isEditing) ? (
  <div className="flex flex-col gap-y-3">
    <PassengerInfo />
    <div className="flex gap-x-3">
      <ChildCount/>
      <TextareaInstruction/>
    </div>

    {/* Book Now Button */}
    <Button
      className="p-4 bg-green-600 hover:bg-green-500 text-white rounded-lg mt-4"
      onClick={handleBookNow}
    >
      {isEditing ? "Save Changes" : "Book Now"}
    </Button>
  </div>
) : (
  showSummary && (
    <StepThreeSummary
      passengerInfo={values.passengerInfo}
      bagCount={values.bagCount || "Not Provided"}
      passengerCount={values.passengerCount || "Not Provided"}
      passengerNotes={values.passengerNotes}
      textarea={values.textarea}
      childCount={values.childCount}
    />
  )
)}

      {/* Pay Now Button */}
      <div>
        <Button
          className="p-6 bg-gray-950 hover:bg-gray-800 text-white rounded-lg"
          onClick={handleOpenDialog}
        >
          Pay Now
        </Button>

        <Dialog open={isPaymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
          <DialogTitle></DialogTitle>
          <DialogContent className="sm:max-w-[425px] bg-transparent border-0 shadow-none">
            <PaymentCardModal onCloseAction={handleCloseDialog} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
