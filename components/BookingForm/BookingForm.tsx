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
    const [completedSteps, setCompletedSteps] = useState<any>({
        Step1: false,
        Step2: false,
        Step3: false,
    })

    // Form initial values...
    const initialValues = {
        bookingType: "to",
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
        bagCount: "0",
        passengerCount: "1",
        childCount: "0",
        textarea: "",
        stops: [],
        hourlyCharter: "2",
        cardNumber: "",
        expiry: "",
        cvc: "",
        country: "",
        airline: "",
        flightNumber: "",
        distance: 0,
        totalPrice: 0,
      };
      
      

    // Form validation schema...
        const validationSchema = Yup.object({
            bookingType: Yup.string().required("Booking type is required"),
            pickUpAddress: Yup.string().required("Pick-up address is required"),
            dropOffAddress: Yup.string().required("Drop-off address is required"),
            airline: Yup.string().required("Airline name is required"),
            flightNumber: Yup.string().required("Flight number is required"),
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
            cardNumber: Yup.string().required('Card number is required'),
            expiry: Yup.string().required('Expiration date is required'),
            cvc: Yup.string().required('CVC is required').min(3, 'CVC must be at least 3 digits'),
            country: Yup.string().required('Country is required'),
        });
      

    // Edit a specific Step...
    const handleEditStep = (stepNumber: number) => {
        setCurrentStep(stepNumber);
    }

    // Function to handle form submission...
    const handleSubmit = (values: typeof initialValues) => {
        console.log("Form Data Submitted", values)
        alert("Booking details successfully submitted!")
    }

  
  return (
    <div 
        className="w-full flex flex-col"
    >
        <div 
            className="w-full h-fit  flex flex-col gap-y-4 py-4 px-3 items-center border rounded-lg shadow-xl group bg-gray-100 backdrop-blur-lg"
        >

            <div className="font-bold text-xl md:text-2xl text-center lg:text-start">
                <h1>Please Select a Vehicle & Date/Times</h1>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              
            >
                {({ values, errors, touched, setFieldValue, setFieldTouched, handleBlur}) => (
                    <Form>
                        
                        {/* Steps */}
                        <div className="flex flex-col gap-y-3 w-full md:w-[780px]">

                            <StepOne
                                isActive= {currentStep === 1}
                                completedSteps = {completedSteps}
                                setCompletedSteps={setCompletedSteps}
                                onEdit = {() => handleEditStep(1)}
                                bookingType={values.bookingType} 
                            
                            />
                        
                            <StepTwo
                                isActive = {currentStep === 2}
                                completedSteps = {completedSteps}
                                setCompletedSteps={setCompletedSteps}
                                onEdit={() => handleEditStep(2)}
                            />
                    
                            <StepThree
                                isActive={currentStep === 3}
                                completedSteps = {completedSteps}
                                setCompletedSteps={setCompletedSteps}
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