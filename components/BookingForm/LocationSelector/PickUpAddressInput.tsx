// it should contain the autocompletion option based on booking type option 
//part &
//add stop button 
import { Input } from "@/components/ui/input"
import { useFormikContext } from "formik";

const PickUpAddressInput = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();

  // Ensure the error is a string before rendering it
  const errorMessage = 
    touched.pickUpAddress && typeof errors.pickUpAddress === "string"
      ? errors.pickUpAddress
      : null

  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-gray-50 shadow-sm">
        <div className="flex w-full md:w-[80px] items-center justify-start md:justify-end px-4 py-1 text-sm font-medium text-gray-700">
          From:
        </div>
        <div className="relative flex-1">
          <Input
              type="text"
              className="w-full text-[16px] font-normal border-0 bg-white pr-24 py-7 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Enter Full Pick-Up Address & Select From Autocomplete"
              value={values.pickUpAddress}
              onChange={(e) => setFieldValue("pickUpAddress", e.target.value)}
          />
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
         
        </div>
    </div>
  )
}

export default PickUpAddressInput;