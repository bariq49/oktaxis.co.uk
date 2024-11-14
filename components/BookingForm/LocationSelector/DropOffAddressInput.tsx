import { useFormikContext, FieldArray, Field } from "formik";
import StopInput from "./StopAddressList/StopAddress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DropOffAddressInput() {
  const { values, setFieldValue, errors, touched } = useFormikContext<{
    dropOffAddress: string;
    stops: string[];
  }>();

  // Error handling for dropOffAddress
  const errorMessage =
    touched.dropOffAddress && typeof errors.dropOffAddress === "string"
      ? errors.dropOffAddress
      : null;

  return (
    <div className="w-full md:w-[550px] max-w-3xl space-y-3">
      <FieldArray
        name="stops"
        render={({ push, remove }) => (
          <>
            {values.stops.map((_, index) => (
              <StopInput
                key={index}
                index={index}
                onRemove={() => remove(index)}
              />
            ))}

            {/* Add stop input field */}
            <div className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-gray-50 shadow-sm">
              <div className="flex w-full md:w-[80px] items-center justify-start md:justify-end px-4 py-1 text-sm font-medium text-gray-700">
                To:
              </div>
              <div className="relative flex-1">
                <Field
                  name="dropOffAddress"
                  as={Input}
                  type="text"
                  className="w-full text-[16px] border-0 bg-white pr-24 py-7 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Enter Full Pick-Up Address & Select From Autocomplete"
                />
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <Button
                  type="button"
                  onClick={() => push("")} // Add a new stop to Formik's state
                  size="sm"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-950 px-3 text-white hover:bg-gray-800"
                >
                  Add Stop
                </Button>
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
}
