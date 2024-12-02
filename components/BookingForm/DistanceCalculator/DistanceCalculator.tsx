import { useEffect, useState } from "react";

interface DistanceCalculatorProps {
  pickUpAddress: string;
  dropOffAddress: string;
  onDistanceCalculated: (distance: number) => void; 
}

export default function DistanceCalculator({
  pickUpAddress,
  dropOffAddress,
  onDistanceCalculated,
}: DistanceCalculatorProps) {
  const [distance, setDistance] = useState<string>("N/A");

  useEffect(() => {
    const calculateDistance = async (pickup: string, dropoff: string) => {
      if (!pickup || !dropoff) return;
  
      try {
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
          {
            origin: pickup,
            destination: dropoff,
            travelMode: google.maps.TravelMode.DRIVING,
            region: "UK", // Restrict to the UK
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
              const totalDistanceKm = result.routes[0]?.legs.reduce(
                (sum, leg) => sum + (leg.distance?.value || 0),
                0
              );
              const totalDistanceMiles = (totalDistanceKm / 1000) * 0.621371;
  
              setDistance((prev) => {
                const newDistance = `${totalDistanceMiles.toFixed(2)} miles`;
                return prev !== newDistance ? newDistance : prev; 
              });
  
              onDistanceCalculated(totalDistanceMiles); 
            } else {
              console.error("Directions request failed with status:", status);
              setDistance("Calculation failed");
              onDistanceCalculated(0);
            }
          }
        );
      } catch (error) {
        console.error("Error calculating distance:", error);
        setDistance("Error occurred");
        onDistanceCalculated(0);
      }
    };
  
    calculateDistance(pickUpAddress, dropOffAddress);
  }, [pickUpAddress, dropOffAddress]); // Removed `onDistanceCalculated` from the dependency array
  

  return (
    <div>
      {/* <h3>Distance: {distance}</h3> */}
    </div>
  );
}
