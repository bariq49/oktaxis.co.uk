import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import { Car, MapPin } from "lucide-react";
import dayjs from "dayjs";

interface StepOneSummaryProps {
  bookingType: string;
  pickUpAddress: string;
  dropOffAddress: string;
  stops?: string[];
  date: string;
  time: string;
}

const StepOneSummary = ({
  bookingType,
  pickUpAddress,
  dropOffAddress,
  stops = [],
  date,
  time,
}: StepOneSummaryProps) => {
  // Helper function to format the date
  const formatDate = (date: string) => {
    return date ? dayjs(date).format("DD MMMM, YYYY") : "Not Selected";
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 space-y-4">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Ride Info Summary</h2>

      <div className="flex items-center gap-2">
        <Car className="text-gray-500" />
        <p className="font-semibold">Booking Type:</p>
        <span>{bookingType || "Not Selected"}</span>
      </div>

      <div className="flex items-center gap-2">
        <MapPin className="text-green-500" />
        <p className="font-semibold">Pickup Address:</p>
        <span>{pickUpAddress || "Not Selected"}</span>
      </div>

      <div className="flex items-center gap-2">
        <MapPin className="text-red-500" />
        <p className="font-semibold">Drop-Off Address:</p>
        <span>{dropOffAddress || "Not Selected"}</span>
      </div>

      {/* Display stop addresses if they exist */}
      {stops.length > 0 && (
        <div>
          <p className="font-semibold">Stops:</p>
          <div className="flex flex-col gap-2 ml-4 mt-1">
            {stops.map((stop, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                <MapPin className="text-blue-500" />
                <span>{stop || "No Address Provided"}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <CalendarIcon className="text-purple-500" />
        <p className="font-semibold">Date:</p>
        <span>{formatDate(date)}</span>
      </div>

      <div className="flex items-center gap-2">
        <ClockIcon className="text-yellow-500" />
        <p className="font-semibold">Time:</p>
        <span>{time || "Not Selected"}</span>
      </div>
    </div>
  );
};

export default StepOneSummary;
