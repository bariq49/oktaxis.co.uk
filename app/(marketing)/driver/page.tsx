"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterDriverForm } from "@/components/DriverForm/RegisterDriverForm";

export default function RegisterDriverPage() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      vehicleType: "",
      vehicleMake: "",
      vehicleModel: "",
      licensePlate: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Phone number must be numeric")
        .required("Phone number is required"),
      vehicleType: Yup.string().required("Vehicle type is required"),
      vehicleMake: Yup.string().required("Vehicle make is required"),
      vehicleModel: Yup.string().required("Vehicle model is required"),
      licensePlate: Yup.string().required("License plate is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      alert("Driver registration submitted successfully!");
    },
  });

  return (
    <RegisterDriverForm
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
    />
  );
}
