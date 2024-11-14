'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PassengerInfo from "../PassengerPersonalInfo/PassengerInfo";
import { DialogTitle ,Dialog, DialogContent } from "@/components/ui/dialog";
import PaymentCardModal from "../PaymentCardModal/PaymentCardModal";

export default function StepThree() {
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const handleOpenDialog = () => setPaymentDialogOpen(true);
  const handleCloseDialog = () => setPaymentDialogOpen(false);

  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="w-full h-16 bg-gray-950 hover:bg-gradient-to-l from-gray-800 via-gray-900 to-gray-950 text-white flex align-middle px-3">
        <h1 className="flex items-center capitalize text-lg font-bold tracking-wider">
          Step Three
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-y-3">
        <PassengerInfo />
      </div>

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
