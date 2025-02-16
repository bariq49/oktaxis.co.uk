export interface OrderProps {
    id: string; 
    category: string;
    price: string;
    car: string;
    distance?: string | null; 
    stop_1?: string | null; 
    stop_2?: string | null; 
    stop_3?: string | null; 
    pickup_date: Date;
    pickup_time: string;
    pickup_location: string;
    dropoff_location: string;
    passengers: number;
    childs: number;
    bags: number;
    name: string;
    email: string;
    phone: string;
    flight: string | null;
    hours?: number | null; 
    minutes?: number | null; 
    updated_at: Date; 
    created_at: Date; 
  }
  