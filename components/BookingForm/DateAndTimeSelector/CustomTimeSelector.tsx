import { useState, useEffect, useRef } from "react";
import { Clock3 } from "lucide-react";
import { useFormikContext } from "formik";

const CustomTimeSelector = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>();
  const [hours, setHours] = useState("--");
  const [minutes, setMinutes] = useState("--");
  const [period, setPeriod] = useState("AM");
  const [showHours, setShowHours] = useState(false);
  const [showMinutes, setShowMinutes] = useState(false);
  const [showPeriod, setShowPeriod] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState("down");

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const hoursOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutesOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
  const periodOptions = ["AM", "PM"];

  // Sync internal state with Formik's initial value
  useEffect(() => {
    if (values.time) {
      const [time, ampm] = values.time.split(" ");
      const [selectedHours, selectedMinutes] = time.split(":");
      setHours(selectedHours);
      setMinutes(selectedMinutes);
      setPeriod(ampm);
    }
  }, [values.time]);

  const updateFormikTime = () => {
    if (hours !== "--" && minutes !== "--" && period) {
      const selectedTime = `${hours}:${minutes} ${period}`;
      setFieldValue("time", selectedTime); 
    }
  };

  useEffect(() => {
    updateFormikTime();
  }, [hours, minutes, period]);

  const checkDropdownPosition = () => {
    if (dropdownRef.current) {
      const { bottom } = dropdownRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setDropdownDirection(bottom > windowHeight ? "up" : "down");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkDropdownPosition);
    return () => window.removeEventListener("resize", checkDropdownPosition);
  }, []);

  const errorMessage =
    touched.time && typeof errors.time === "string"
      ? errors.time
      : null;

  return (
    <div ref={containerRef} className="flex items-center w-full">
      <div className="relative bg-white rounded-lg flex items-center w-full flex-row-reverse md:flex-row">
        <div className="flex bg-gray-50 w-[95px] md:w-[114px] items-center py-7 rounded-r-lg md:rounded-r-none md:rounded-l-lg">
          <Clock3 className="absolute right-5 md:left-[30px] top-[17px] text-2xl text-gray-950" />
        </div>

        <div className="flex gap-x-3 font-normal text-[16px] cursor-pointer w-full pl-4">
          <div onClick={() => setShowHours(!showHours)}>{hours}</div>:
          <div onClick={() => setShowMinutes(!showMinutes)}>{minutes}</div>
          <div onClick={() => setShowPeriod(!showPeriod)}>{period}</div>
        </div>

        {showHours && (
          <div
            ref={dropdownRef}
            className={`absolute z-50 left-[30%] rounded-lg ${dropdownDirection === "up" ? "bottom-full" : "top-full"} bg-white shadow-lg`}
          >
            {hoursOptions.map((hour) => (
              <div
                key={hour}
                className="py-2 px-4 hover:bg-gray-950 hover:text-white rounded-lg cursor-pointer"
                onClick={() => { setHours(hour.toString().padStart(2, "0")); setShowHours(false); }}
              >
                {hour}
              </div>
            ))}
          </div>
        )}

        {showMinutes && (
          <div
            ref={dropdownRef}
            className={`absolute z-50 left-[45%] rounded-lg ${dropdownDirection === "up" ? "bottom-full" : "top-full"} bg-white shadow-lg`}
          >
            {minutesOptions.map((minute) => (
              <div
                key={minute}
                className="py-2 px-4 hover:bg-gray-950 hover:text-white rounded-lg cursor-pointer"
                onClick={() => { setMinutes(minute); setShowMinutes(false); }}
              >
                {minute}
              </div>
            ))}
          </div>
        )}

        {showPeriod && (
          <div
            ref={dropdownRef}
            className={`absolute z-50 left-[58%] rounded-lg ${dropdownDirection === "up" ? "bottom-full" : "top-full"} bg-white shadow-lg`}
          >
            {periodOptions.map((p) => (
              <div
                key={p}
                className="py-2 px-4 hover:bg-gray-950 hover:text-white rounded-lg cursor-pointer"
                onClick={() => { setPeriod(p); setShowPeriod(false); }}
              >
                {p}
              </div>
            ))}
          </div>
        )}
      </div>

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default CustomTimeSelector;
