import { FormikErrors, FormikTouched } from "formik";

interface RegisterDriverFormProps {
  values: any;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const vehicleTypes = ["Sedan", "SUV", "Van", "Luxury", "Other"];

export const RegisterDriverForm: React.FC<RegisterDriverFormProps> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">REGISTER AS DRIVER</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-32 bg-black"></div>
            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            <div className="h-[1px] w-32 bg-black"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-200 px-3 py-2 border-b ${
                touched.firstName && errors.firstName
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-green-500 focus:outline-none`}
            />
            {touched.firstName && typeof errors.firstName === "string" ? (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            ) : null}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-200 px-3 py-2 border-b ${
                touched.lastName && errors.lastName
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-green-500 focus:outline-none`}
            />
            {touched.lastName && typeof errors.lastName === "string" ? (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            ) : null}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-200 px-3 py-2 border-b ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-green-500 focus:outline-none`}
            />
            {touched.email && typeof errors.email === "string" ? (
              <p className="text-red-500 text-sm">{errors.email}</p>
            ) : null}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-200 px-3 py-2 border-b ${
                touched.phone && errors.phone
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-green-500 focus:outline-none`}
            />
            {touched.phone && typeof errors.phone === "string" ? (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            ) : null}
          </div>

          {/* Vehicle Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Vehicle Type</label>
            <select
              name="vehicleType"
              value={values.vehicleType}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-200 px-3 py-2 border-b ${
                touched.vehicleType && errors.vehicleType
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-green-500 focus:outline-none`}
            >
              <option value="">Select Vehicle Type</option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type} className="">
                  <span className="bg-gray-800 hover:!bg-gray-700 hover:text-white">
                    {type}
                  </span>
                </option>
              ))}
            </select>
            {touched.vehicleType && typeof errors.vehicleType === "string" ? (
              <p className="text-red-500 text-sm">{errors.vehicleType}</p>
            ) : null}
          </div>

          {/* License Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">License Number</label>
            <input
              type="text"
              name="licenseNumber"
              value={values.licenseNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-200 px-3 py-2 border-b ${
                touched.licenseNumber && errors.licenseNumber
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-green-500 focus:outline-none`}
            />
            {touched.licenseNumber &&
            typeof errors.licenseNumber === "string" ? (
              <p className="text-red-500 text-sm">{errors.licenseNumber}</p>
            ) : null}
          </div>
      

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
