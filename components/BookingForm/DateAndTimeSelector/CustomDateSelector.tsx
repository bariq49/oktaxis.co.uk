"use client";

import * as React from "react";
import { format, isBefore, startOfToday } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useFormikContext } from "formik";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const CustomDateSelector = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  // Get today's date to disable past dates
  const today = startOfToday();

  // Sync internal state with Formik's initial value
  React.useEffect(() => {
    if (values.date) {
      const parsedDate = new Date(values.date);
      if (!isNaN(parsedDate.getTime())) {
        setDate(parsedDate);
      }
    }
  }, [values.date]);

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate) {
      setFieldValue("date", newDate.toISOString());
      setPopoverOpen(false);
    }
  };

  const errorMessage =
    touched.date && typeof errors.date === "string"
      ? errors.date
      : null;

  return (
    <div className="w-full flex flex-col">
      <div>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <div className="relative bg-white rounded-lg h-[54px] flex items-center w-full flex-row-reverse md:flex-row">
              <div
                className="flex bg-gray-50 w-[95px] md:w-[105px] items-center py-[26px] rounded-r-lg md:rounded-r-none md:rounded-l-lg"
              >
                <CalendarIcon className="absolute right-5 md:left-[30px] top-[17px] text-2xl text-gray-950" />
              </div>

              <div className="w-full">
                <Button
                  className={cn(
                    "w-full bg-transparent text-gray-950 justify-start text-left font-normal border-none shadow-none p-0 pl-4 text-[16px] hover:bg-transparent",
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleSelect}
              initialFocus
              className="rounded-md [&_button:hover:not([disabled])]:bg-gray-700 [&_button:hover:not([disabled])]:text-white [&_button[aria-selected='true']]:bg-gray-800 [&_button[aria-selected='true']]:text-white"
              defaultMonth={date || new Date()} // Default to the selected date or today's date
              disabled={(day) => isBefore(day, today)} // Disable past dates
            />
          </PopoverContent>
        </Popover>
      </div>

      {errorMessage && <p className="text-red-500 text-xs pl-2">{errorMessage}</p>}
    </div>
  );
};

export default CustomDateSelector;
