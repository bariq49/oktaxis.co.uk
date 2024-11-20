'use client';

import { useFormikContext } from 'formik';
import { Input } from '@/components/ui/input';
import BagCount from '../PassengerAndLuggageSelector/BagCount';
import PassengerCount from '../PassengerAndLuggageSelector/PassengerCount';

export default function PassengerInfo() {
  const { values, setFieldValue, touched, errors, handleBlur, setFieldTouched } =
    useFormikContext<{
      passengerInfo: {
        name: string;
        email: string;
        phone: string;
      };
    }>();

  const handleFieldBlur = (field: string) => {
    // handleBlur({ target: { name: field } });
    setFieldTouched(field, true); // Mark field as touched on blur
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-medium">Main Passenger *</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Name Input */}
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            onBlur={() => handleFieldBlur('passengerInfo.name')}
            value={values.passengerInfo.name}
            onChange={(e) => setFieldValue('passengerInfo.name', e.target.value)}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
            errors?.passengerInfo?.name
                ? 'border-red-500'
                : ''
            }`}
          />
          {/* {errors?.passengerInfo?.name && (
            <p className="mt-1 text-xs text-red-500">{errors.passengerInfo.name}</p>
          )} */}
        </div>

        {/* Email Input */}
        <div>
          <Input
            type="email"
            placeholder="Email"
            onBlur={() => handleFieldBlur('passengerInfo.email')}
            value={values.passengerInfo.email}
            onChange={(e) => setFieldValue('passengerInfo.email', e.target.value)}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
              touched?.passengerInfo?.email && errors?.passengerInfo?.email
                ? 'border-red-500'
                : ''
            }`}
          />
          {/* {touched?.passengerInfo?.email && errors?.passengerInfo?.email && (
            <p className="mt-1 text-xs text-red-500">{errors.passengerInfo.email}</p>
          )} */}
        </div>

        {/* Phone Number Input */}
        <div>
          <Input
            type="text"
            placeholder="Phone Number"
            onBlur={() => handleFieldBlur('passengerInfo.phone')}
            value={values.passengerInfo.phone}
            onChange={(e) => setFieldValue('passengerInfo.phone', e.target.value)}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
              touched?.passengerInfo?.phone && errors?.passengerInfo?.phone
                ? 'border-red-500'
                : ''
            }`}
          />
          {/* {touched?.passengerInfo?.phone && errors?.passengerInfo?.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.passengerInfo.phone}</p>
          )} */}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-3 gap-y-3 w-full">
        <BagCount />
        <PassengerCount />
      </div>
    </div>
  );
}
