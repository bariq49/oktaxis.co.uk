export interface OrderProps {
    id: string; 
    track_id: number; 
    category: string;
    price: string;
    car: string;
    distance?: string | null; 
    stop_1?: string | null; 
    stop_2?: string | null; 
    stop_3?: string | null; 
    pickup_date: Date;
    pickup_time: string;
    return_pickup_date: Date | null;
    return_pickup_time: string | null;
    pickup_location: string;
    dropoff_location: string;
    passengers: number;
    name: string;
    email: string;
    phone: string;
    flight: string | null;
    return_flight: string | null;
    meet_and_greet: string | null;
    flight_track: string | null;
    hours?: number | null; 
    minutes?: number | null; 
    updated_at: Date; 
    created_at: Date; 
  }
  