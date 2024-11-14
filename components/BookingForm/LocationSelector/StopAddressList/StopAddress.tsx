import { Field } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface StopInputProps {
  index: number;
  onRemove: () => void;
}

export default function StopInput({ index, onRemove }: StopInputProps) {
  return (
    <div className="flex overflow-hidden rounded-lg bg-gray-50 shadow-sm">
      <div className="flex w-[80px] items-center justify-end px-4 text-sm font-medium text-gray-700">
        Stop {index + 1}:
      </div>
      <div className="relative flex-1">
        <Field
          name={`stops[${index}]`}
          as={Input}
          type="text"
          className="border-0 text-[16px] bg-white py-7 pr-12 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Enter Stop Address"
        />
        <Button
          type="button"
          onClick={onRemove}
          size="sm"
          variant="ghost"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-red-700 hover:bg-red-800 hover:text-white"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
