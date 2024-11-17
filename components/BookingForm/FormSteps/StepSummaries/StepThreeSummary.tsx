interface StepThreeSummaryProps {
    passengerInfo: {
      name: string;
      email: string;
      phone: string;
    };
    bagCount: string;
    passengerCount: string;
    passengerNotes?: string;
    textarea: string;
    childCount: string;
  }
  
  const StepThreeSummary = ({
    passengerInfo,
    bagCount,
    passengerCount,
    passengerNotes,
    textarea,
    childCount,
  }: StepThreeSummaryProps) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 space-y-4">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Passenger Info Summary</h2>
  
        <div className="flex items-center gap-2">
          <p className="font-semibold">Name:</p>
          <span>{passengerInfo?.name || 'Not Provided'}</span>
        </div>
  
        <div className="flex items-center gap-2">
          <p className="font-semibold">Phone:</p>
          <span>{passengerInfo?.phone || 'Not Provided'}</span>
        </div>
  
        <div className="flex items-center gap-2">
          <p className="font-semibold">Email:</p>
          <span>{passengerInfo?.email || 'Not Provided'}</span>
        </div>
  
        <div className="flex items-center gap-2">
          <p className="font-semibold">Bags:</p>
          <span>{bagCount || 'Not Provided'}</span>
        </div>
  
        <div className="flex items-center gap-2">
          <p className="font-semibold">Passengers:</p>
          <span>{passengerCount || 'Not Provided'}</span>
        </div>

        <div className="flex items-center gap-2">
          <p className="font-semibold">Children:</p>
          <span>{childCount || ''}</span>
        </div>

        <div className="flex items-center gap-2">
          <p className="font-semibold">Passenger Instructions:</p>
          <span>{textarea || 'Not Provided'}</span>
        </div>
  
        {passengerNotes && (
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Notes:</p>
            <div className="bg-gray-100 rounded-lg p-2">
              <span>{passengerNotes}</span>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default StepThreeSummary;
  