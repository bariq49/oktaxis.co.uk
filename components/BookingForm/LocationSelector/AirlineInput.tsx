import { Input } from "@/components/ui/input";
import { useFormikContext } from "formik";

const AirlineInput = () => {
  const { values, setFieldValue, touched, errors } = useFormikContext<{
    airline: string;
    flightNumber: string;
  }>();

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
        {touched.airline && errors.airline && (
          <p className="text-red-500 text-xs mt-1">{errors.airline}</p>
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
        {touched.flightNumber && errors.flightNumber && (
          <p className="text-red-500 text-xs mt-1">{errors.flightNumber}</p>
        )}
      </div>

    </div>
  );
};

export default AirlineInput;
