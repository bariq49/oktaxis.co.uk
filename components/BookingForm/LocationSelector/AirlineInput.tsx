import { Input } from "@/components/ui/input";
import { useFormikContext } from "formik";

const AirlineInput = () => {
  const { values, setFieldValue, touched, errors } = useFormikContext<{
    airline: string;
    flightNumber: string;
  }>();

  // Error handling for both fields
  const airlineError =
    touched.airline && typeof errors.airline === "string"
      ? errors.airline
      : null;

  const flightNumberError =
    touched.flightNumber && typeof errors.flightNumber === "string"
      ? errors.flightNumber
      : null;

  return (
    <div className="w-full flex lg:flex-row flex-col gap-x-3 gap-y-3">
      {/* Airline Input */}
      <div className="h-[52px] w-full lg:w-1/2">
        <Input
          type="text"
          placeholder="Enter Airline"
          value={values.airline || ""}
          onChange={(e) => setFieldValue("airline", e.target.value)}
          className="w-full py-[26px] bg-white focus-visible:ring-0"
        />
        {airlineError && (
          <p className="text-red-500 text-xs -mt-1">{airlineError}</p>
        )}
      </div>

      {/* Flight Number Input */}
      <div className="h-[52px] w-full lg:w-1/2">
        <Input
          type="text"
          placeholder="Enter Flight Number"
          value={values.flightNumber || ""}
          onChange={(e) => setFieldValue("flightNumber", e.target.value)}
          className="w-full py-[26px] bg-white focus-visible:ring-0"
        />
        {flightNumberError && (
          <p className="text-red-500 text-xs -mt-1">{flightNumberError}</p>
        )}
      </div>
    </div>
  );
};

export default AirlineInput;
