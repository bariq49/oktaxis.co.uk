"use client"
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import StepOne from "./FormSteps/StepOne"
import StepTwo from "./FormSteps/StepTwo"
import StepThree from "./FormSteps/StepThree"


const BookingForm = () => {

    // State variables for tracking current step and completed step...
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState({
        Step1: false,
        Step2: false,
        Step3: false,
    })

    // Form initial values...
    const initialValues = {
        bookingType: "",
        pickUpAddress: "",
        dropOffAddress: "",
        date: "",
        time: "",
        vehicleType: "",
        passengerInfo: {
          name: "",
          email: "",
          phone: "",
        },
        stops: [], 
        hourlyCharter: "2",
      };
      

    // Form validation schema...
        const validationSchema = Yup.object({
            bookingType: Yup.string().required("Booking type is required"),
            pickUpAddress: Yup.string().required("Pick-up address is required"),
            dropOffAddress: Yup.string().required("Drop-off address is required"),
            date: Yup.string().required("Date is required"),
            time: Yup.string().required("Time is required"),
            vehicleType: Yup.string().required("Vehicle type is required"),
            passengerInfo: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string()
                .matches(/^\d+$/, "Phone number must be numeric")
                .required("Phone is required"),
            }),
            stops: Yup.array()
            .of(Yup.string().required("Stop address is required"))
            .min(1, "At least one stop is required"),
            hourlyCharter: Yup.string().required("Please select the number of hours"),
        });
      

    // Function to complete the current step & move to next...
    const handleCompleteStep = (stepName: string) => {
        setCompletedSteps((prev) => ({
            ...prev,
            [stepName]: true,
        }));
        setCurrentStep((prev) => prev + 1)
    };

    // Edit a specific Step...
    const handleEditStep = (stepNumber: number) => {
        setCurrentStep(stepNumber);
    }

    // Function to handle form submission...
    const handleSubmit = (values: typeof initialValues) => {
        console.log("Form Data Submitted", values)
        alert("Booking details successfully submitted!")
        // logic for the api submission here..
    }

  
  return (
    <div 
        className="container flex flex-col m-auto justify-center items-center"
    >
        <div 
            className="w-[95%] md:w-[80%] h-fit mt-[2%] flex flex-col gap-y-7 items-center border rounded-md shadow-xl p-[2%] group bg-gray-300 backdrop-blur-lg"
        >

            <div className="font-bold text-xl md:text-2xl">
                <h1>Please Select a Vehicle & Date/Times</h1>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, setFieldValue}) => (
                    <Form>
                        {/* Steps */}
                        <div className="flex flex-col gap-y-3 w-full md:w-[780px]">

                            <StepOne
                                isActive= {currentStep === 1}
                                isCompleted= {completedSteps.Step1}
                                onComplete = {() => handleCompleteStep("Step1")}
                                onEdit = {() => handleEditStep(1)}
                            
                            />
                        
                            <StepTwo
                                isActive = {currentStep === 2}
                                isCompleted={completedSteps.Step2}
                                onComplete={() => handleCompleteStep("Step2")}
                                onEdit={() => handleEditStep(2)}
                            />
                    
                            <StepThree
                                isActive={currentStep === 3}
                                isCompleted={completedSteps.Step3}
                                onComplete={() => handleCompleteStep("Step3")}
                                onEdit={() => handleEditStep(3)}
                            />
                            
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default BookingForm