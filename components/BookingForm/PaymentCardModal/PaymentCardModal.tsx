'use client';

import { CreditCard, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormikContext } from 'formik';
import { sendBookingEmail } from '@/lib/utils'; // Import the utility function

export default function PaymentCardModal({ onCloseAction }: { onCloseAction: () => void }) {
  const { values, setFieldValue, touched, errors, handleChange } = useFormikContext<any>();

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(" ") : value;
  };

  const renderError = (error: any) => {
    return typeof error === 'string' ? error : '';
  };

  // Handle payment and email sending
  const handlePayment = async () => {
    // Perform payment logic here (e.g., call Stripe API)
    console.log('Payment processed successfully');

    // Send booking email after payment is successful
    await sendBookingEmail(values);

    // Optionally close the modal
    onCloseAction();
  };

  return (
    <Card className="border-0 shadow-none relative">
      <button
        className="absolute right-2 top-2 rounded-full border border-gray-950 p-1 text-gray-950 bg-white hover:bg-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={onCloseAction}
      >
        <X className="h-4 w-4" />
      </button>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          <h1 className="tracking-wide">Stripe Payment</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Card Number */}
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 1234 1234 1234"
            value={formatCardNumber(values.cardNumber)}
            onChange={(e) => setFieldValue("cardNumber", formatCardNumber(e.target.value))}
            maxLength={19}
            className="focus-visible:ring-0"
          />
          {touched.cardNumber && renderError(errors.cardNumber) && (
            <p className="text-red-500 text-sm">{renderError(errors.cardNumber)}</p>
          )}
        </div>

        {/* Expiry Date & CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiration date</Label>
            <Input
              id="expiry"
              name="expiry"
              placeholder="MM / YY"
              value={values.expiry}
              onChange={handleChange}
              maxLength={7}
              className="focus-visible:ring-0"
            />
            {touched.expiry && renderError(errors.expiry) && (
              <p className="text-red-500 text-sm">{renderError(errors.expiry)}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cvc">Security code</Label>
            <Input
              id="cvc"
              name="cvc"
              placeholder="CVC"
              value={values.cvc}
              onChange={handleChange}
              maxLength={4}
              className="focus-visible:ring-0"
            />
            {touched.cvc && renderError(errors.cvc) && (
              <p className="text-red-500 text-sm">{renderError(errors.cvc)}</p>
            )}
          </div>
        </div>

        {/* Country Selector */}
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select
            onValueChange={(value) => setFieldValue("country", value)}
            defaultValue={values.country}
          >
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" className="focus-visible:ring-0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pk">Pakistan</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
          {touched.country && renderError(errors.country) && (
            <p className="text-red-500 text-sm">{renderError(errors.country)}</p>
          )}
        </div>
      </CardContent>

      {/* Pay Button */}
      <CardFooter>
        <Button
          type="button"
          onClick={handlePayment} // Call handlePayment on button click
          className="w-full bg-gray-950 hover:bg-gray-900 text-white font-medium text-lg py-6"
        >
          Pay €969,648
        </Button>
      </CardFooter>
    </Card>
  );
}
