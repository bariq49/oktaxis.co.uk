'use client';

import { useFormikContext } from 'formik';
import { Input } from '@/components/ui/input';
import BagCount from '../PassengerAndLuggageSelector/BagCount';
import PassengerCount from '../PassengerAndLuggageSelector/PassengerCount';
import { useState } from 'react';

export default function PassengerInfo() {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext<{
      passengerInfo: {
        name: string;
        email: string;
        phone: string;
      };
    }>();

  // Local state to track input focus
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Function to check for error message
  const getErrorMessage = (field: keyof typeof values.passengerInfo) => {
    return focus[field] && touched.passengerInfo?.[field] && errors.passengerInfo?.[field]
      ? errors.passengerInfo[field]
      : null;
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
            name="passengerInfo.name"
            type="text"
            placeholder="Full Name"
            value={values.passengerInfo.name}
            onFocus={() => setFocus((prev) => ({ ...prev, name: true }))}
            onChange={(e) => setFieldValue('passengerInfo.name', e.target.value)}
            onBlur={(e) => {
              handleBlur(e);
              setFocus((prev) => ({ ...prev, name: true })); // Keep focus state
            }}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
              getErrorMessage('name') ? 'border-red-500' : ''
            }`}
          />
          {getErrorMessage('name') && (
            <p className="mt-1 text-xs text-red-500">{getErrorMessage('name')}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <Input
            name="passengerInfo.email"
            type="email"
            placeholder="Email"
            value={values.passengerInfo.email}
            onFocus={() => setFocus((prev) => ({ ...prev, email: true }))}
            onChange={(e) => setFieldValue('passengerInfo.email', e.target.value)}
            onBlur={(e) => {
              handleBlur(e);
              setFocus((prev) => ({ ...prev, email: true }));
            }}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
              getErrorMessage('email') ? 'border-red-500' : ''
            }`}
          />
          {getErrorMessage('email') && (
            <p className="mt-1 text-xs text-red-500">{getErrorMessage('email')}</p>
          )}
        </div>

        {/* Phone Number Input */}
        <div>
          <Input
            name="passengerInfo.phone"
            type="text"
            placeholder="Phone Number"
            value={values.passengerInfo.phone}
            onFocus={() => setFocus((prev) => ({ ...prev, phone: true }))}
            onChange={(e) => setFieldValue('passengerInfo.phone', e.target.value)}
            onBlur={(e) => {
              handleBlur(e);
              setFocus((prev) => ({ ...prev, phone: true }));
            }}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
              getErrorMessage('phone') ? 'border-red-500' : ''
            }`}
          />
          {getErrorMessage('phone') && (
            <p className="mt-1 text-xs text-red-500">{getErrorMessage('phone')}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-3 gap-y-3 w-full">
        <BagCount />
        <PassengerCount />
      </div>
    </div>
  );
}
