'use client'

import { CreditCard, X } from 'lucide-react';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PaymentCardModal({ onCloseAction }: { onCloseAction: () => void }) {
  const [cardNumber, setCardNumber] = useState("");

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

  return (
    <Card className="border-0 shadow-none relative">
      <button
        className="absolute right-2 top-2 rounded-full border border-gray-950  p-1 text-gray-950 bg-white hover:bg-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={onCloseAction}
      >
        <X className="h-4 w-4 " />
        {/* <span className="sr-only">Close</span> */}
      </button>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
            <h1 className='tracking-wide'>Stripe Payment</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="number">Card number</Label>
          <div className="relative">
            <Input
              id="number"
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              maxLength={19}
              className='focus-visible:ring-0'
            />
            {/* <div className="absolute right-3 top-2.5 flex gap-1">
              <img src="/placeholder.svg?height=24&width=36" alt="Visa" className="h-6 w-auto" />
              <img src="/placeholder.svg?height=24&width=36" alt="Mastercard" className="h-6 w-auto" />
              <img src="/placeholder.svg?height=24&width=36" alt="American Express" className="h-6 w-auto" />
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiration date</Label>
            <Input 
              id="expiry" 
              placeholder="MM / YY" 
              maxLength={7} 
              className='focus-visible:ring-0'
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvc">Security code</Label>
            <Input 
              id="cvc" 
              placeholder="CVC" 
              maxLength={4} 
              className='focus-visible:ring-0'
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" className='focus-visible:ring-0'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pk" className="text-gray-950 hover:bg-gray-900 hover:text-white ">
                Pakistan
              </SelectItem>
              <SelectItem value="us" className="text-gray-950 hover:bg-gray-900 hover:text-white ">
                United States
              </SelectItem>
              <SelectItem value="uk" className="text-gray-950 hover:bg-gray-900 hover:text-white ">
                United Kingdom
              </SelectItem>
              <SelectItem value="ca" className="text-gray-950 hover:bg-gray-900 hover:text-white ">
                Canada
              </SelectItem>
              <SelectItem value="au" className="text-gray-950 hover:bg-gray-900 hover:text-white ">
                Australia
              </SelectItem>
            </SelectContent>

          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gray-950 hover:bg-gray-900 text-white font-medium text-lg py-6">
          Pay €969,648
        </Button>
      </CardFooter>
    </Card>
  );
}
