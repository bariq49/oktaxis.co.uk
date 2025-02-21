'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useRef, useState, useTransition } from 'react'
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
// calander imports
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarDays, TimerIcon, Search, Trash2, SquarePlus, Pencil, CarFront } from "lucide-react"



// calander end

// maps 
import { calculateDistance } from '@/actions/get-distance'
import { Autocomplete, Libraries, useLoadScript } from "@react-google-maps/api"
import Image, { StaticImageData } from 'next/image'


import BMW from "@/assets/Executive.jpg";
import Skoda from "@/assets/Economy.jpg";
import Tesla from "@/assets/Tesla S.png";
import XLVan from "@/assets/Luxury Van.jpg";

// import { createOrder } from '@/actions/add-order'
import { createOrder } from '@/actions/add-order'
import Link from 'next/link'
import MyPaymentForm, { PaymentFormFields } from './PaymentForm'
import StripePaymentForm from './StipePaymentForm'



const libraries: Libraries = ["places"];
interface locationProps {
  lat: () => number;
  lng: () => number;
};
interface Place {
  formatted_address: string;
  geometry: {
    location: locationProps
  };
}


// maps end




function IncrementDecrementButtont({ text }: { text: string }) {
  return <div className='size-9  rounded-sm bg-gray-200  cursor-pointer relative'>

    <span className='absolute  leading-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{text}</span>
  </div>
}




const hourlyFormValidation = z.object({
  pickup_date: z.date({ required_error: 'Please Chose a Date' }),
  pickup_time: z.object({
    hour: z
      .number({
        required_error: "Please Choose an Hour",
      })
      .min(1, "Hour must be between 1 and 12")
      .max(12, "Hour must be between 1 and 12"),
    minute: z
      .number({
        required_error: "Please Choose Minutes",
      })
      .min(0, "Minutes must be between 0 and 59")
      .max(59, "Minutes must be between 0 and 59"),
    period: z
      .enum(["AM", "PM"], {
        required_error: "Please Choose AM or PM",
      }),
  }),
  pickup_location: z.string({ required_error: 'Please Chose Pickup Location' }),
  dropoff_location: z.string({ required_error: 'Please Chose Dropoff Location' }),
  stop_1: z.string().optional(),
  stop_2: z.string().optional(),
  stop_3: z.string().optional(),
  passengers: z.number({ required_error: 'Please Enter Passengers' }).min(1).max(6),
  childs: z.number({ required_error: 'Please Enter childs' }).min(0).max(6),
  bags: z.number({ required_error: 'Please Enter Meet & Greet' }).min(0).max(2),
  name: z.string({ required_error: 'Please Enter Your Name' }),
  email: z.string({ required_error: 'Please Enter Email' }).email(),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  flight: z.string().optional(),
  payment_id: z.string().optional(),
  hours: z.number({ required_error: 'Please Enter Hours' }).min(1),
  minutes: z.number({ required_error: 'Please Enter Minutes' }).min(0),

})

const simpleFormValidation = z.object({
  pickup_date: z.date({ required_error: 'Please Chose a Date' }),
  pickup_time: z.object({
    hour: z
      .number({
        required_error: "Please Choose an Hour",
      })
      .min(1, "Hour must be between 1 and 12")
      .max(12, "Hour must be between 1 and 12"),
    minute: z
      .number({
        required_error: "Please Choose Minutes",
      })
      .min(0, "Minutes must be between 0 and 59")
      .max(59, "Minutes must be between 0 and 59"),
    period: z
      .enum(["AM", "PM"], {
        required_error: "Please Choose AM or PM",
      }),
  }),

  pickup_location: z.string({ required_error: 'Please Chose Pickup Location' }),
  dropoff_location: z.string({ required_error: 'Please Chose Dropoff Location' }),
  stop_1: z.string().optional(),
  stop_2: z.string().optional(),
  stop_3: z.string().optional(),
  passengers: z.number({ required_error: 'Please Enter Passengers' }).min(1).max(6),
  childs: z.number({ required_error: 'Please Enter childs' }).min(0).max(6),
  bags: z.number({ required_error: 'Please Enter Meet & Greet' }).min(0).max(1),
  name: z.string({ required_error: 'Please Enter Your Name' }),
  email: z.string({ required_error: 'Please Enter Email' }).email(),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  flight: z.string().optional(),
  payment_id: z.string().optional(),
  hours: z.number(),
  minutes: z.number(),

})

type FormFieldTypes =
  | "pickup_date"
  | "pickup_time"
  | "pickup_location"
  | "dropoff_location"
  | "passengers"
  | "stop_1"
  | "stop_2"
  | "stop_3"
  | "childs"
  | "bags"
  | "name"
  | "email"
  | "phone"
  | "flight"
  | "payment_id"
  | "pickup_time.hour"
  | "pickup_time.minute"
  | "pickup_time.period"
  | "hours"
  | "minutes";
type HourlyFormDataProps = z.infer<typeof hourlyFormValidation>;
// type SimpleFormDataProps = z.infer<typeof simpleFormValidation>;

function Circle({ active, text, title }: { active: boolean, text: string, title: string }) {
  return <div className={`size-7 rounded-full min-w-7 relative text-white ${active ? 'bg-black ' : 'bg-gray-400 '}`}>
    <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm leading-[8px] '>{text}</span>
    <span className={`absolute top-[150%] left-1/2 -translate-x-1/2 max-sm:hidden  leading-[8px] font-semibold  text-nowrap text-xs ${active ? 'text-black ' : ' text-gray-400'} `}>{title}</span>

  </div>
}
type CarDetails = {
  name: string;
  cars: string;
  price: number;
  under10: number;
  under20: number;
  hourly: number;
  stop: number;
  bags: number;
  persons: number;
  image: StaticImageData;
  specailRequest: boolean;

};

type CarsDataTypes = {
  'hourly-rates': {
    'skoda': CarDetails;
    'bmw': CarDetails;
    'tesla': CarDetails;
    'xlvan': CarDetails;
  };
  'road-trips': {
    'skoda': CarDetails;
    'bmw': CarDetails;
    'tesla': CarDetails;
    'xlvan': CarDetails;
  };
};

const carsData: CarsDataTypes = {

  'hourly-rates': {
    'skoda': { name: 'Economy', cars: 'Skoda Octavia | ToyotaPrius', price: 1.3, image: Skoda, bags: 3, persons: 4, specailRequest: false, under10: 25, under20: 35, hourly: 15, stop: 10 },
    'bmw': { name: 'Executive', cars: 'BMW 5 Series | MERC E Class', price: 1.45, image: BMW, bags: 3, persons: 4, specailRequest: true, under10: 35, under20: 45, hourly: 17, stop: 10 },
    'tesla': { name: 'Executive Premium', cars: 'Tesla Model S', price: 1.6, image: Tesla, bags: 3, persons: 4, specailRequest: true, under10: 45, under20: 65, hourly: 20, stop: 10 },
    'xlvan': { name: 'Luxury Van', cars: 'XL Passenger Van', price: 1.9, image: XLVan, bags: 6, persons: 6, specailRequest: true, under10: 65, under20: 80, hourly: 30, stop: 15 },
  },
  'road-trips': {
    'skoda': { name: 'Economy', cars: 'Skoda Octavia | ToyotaPrius', price: 1.3, image: Skoda, bags: 3, persons: 4, specailRequest: false, under10: 25, under20: 35, hourly: 15, stop: 10 },
    'bmw': { name: 'Executive', cars: 'BMW 5 Series | MERC E Class', price: 1.45, image: BMW, bags: 3, persons: 4, specailRequest: true, under10: 35, under20: 45, hourly: 17, stop: 10 },
    'tesla': { name: 'Executive Premium', cars: 'Tesla Model S', price: 1.6, image: Tesla, bags: 3, persons: 4, specailRequest: true, under10: 45, under20: 65, hourly: 20, stop: 10 },
    'xlvan': { name: 'Luxury Van', cars: 'XL Passenger Van', price: 1.9, image: XLVan, bags: 6, persons: 6, specailRequest: true, under10: 65, under20: 80, hourly: 30, stop: 15 },
  },
};

const allCars = [{ name: 'Economy', cars: 'Skoda Octavia | ToyotaPrius', price: 1.3, image: Skoda, bags: 3, persons: 4, specailRequest: false, under10: 25, under20: 35, hourly: 0.25, stop: 10 },
{ name: 'Executive', cars: 'BMW 5 Series | MERC E Class', price: 1.45, image: BMW, bags: 3, persons: 4, specailRequest: true, under10: 35, under20: 45, hourly: 17, stop: 10 },
{ name: 'Executive Premium', cars: 'Tesla Model S', price: 1.6, image: Tesla, bags: 3, persons: 4, specailRequest: true, under10: 45, under20: 65, hourly: 20, stop: 10 },
{ name: 'Luxury Van', cars: 'XL Passenger Van', price: 1.9, image: XLVan, bags: 6, persons: 6, specailRequest: true, under10: 65, under20: 80, hourly: 30, stop: 15 },]



function BookingForm({ _category }: { _category: string }) {
  const paramCategory = _category as keyof CarsDataTypes
  const [step, setStep] = useState<number>(1)
  const [fromPlace, setFromPlace] = useState<Place | null>()
  const [toPlace, setToPlace] = useState<Place | null>()
  const [stop1Place, setStop1Place] = useState<Place | null>()
  const [stop2Place, setStop2Place] = useState<Place | null>()
  const [stop3Place, setStop3Place] = useState<Place | null>()
  const [dateOpen, setDateOpen] = useState(false)
  const [category, setCategory] = useState<keyof CarsDataTypes | null>()

  const [calculatingPrice, startCalculatingPrice] = useTransition()
  const [distance, setDistance] = useState(0);
  const [error, setError] = useState('')
  const [paymentDone, setPaymentDone] = useState(false);
  const [orderId, setOrderId]=useState<string | null>()

  const form = useForm({ resolver: zodResolver(category === 'hourly-rates' ? hourlyFormValidation : simpleFormValidation) })
  const [price, setPrice] = useState(0)
  const [car, setCar] = useState('')
  const [formDone, setFormDone] = useState(false)
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  const [isSubmiting, startSubmiting] = useTransition()
  const [stops, setStops] = useState<boolean[]>([])
  const step1Fields: FormFieldTypes[] = ['pickup_date', 'pickup_time', 'pickup_location', 'dropoff_location', 'passengers', 'hours', 'minutes']
  const { isLoaded, } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
      "AIzaSyDaQ998z9_uXU7HJE5dolsDqeO8ubGZvDU",
    libraries,
  });
  const fromRef = useRef<google.maps.places.Autocomplete | null>(null);
  const toRef = useRef<google.maps.places.Autocomplete | null>(null);
  const stop1Ref = useRef<google.maps.places.Autocomplete | null>(null);
  const stop2Ref = useRef<google.maps.places.Autocomplete | null>(null);
  const stop3Ref = useRef<google.maps.places.Autocomplete | null>(null);


  useEffect(() => {
    setCategory(paramCategory)
    form.setValue('passengers', 1)
    form.setValue('childs', 0)
    form.setValue('bags', 0)
    form.setValue('hours', 0)
    form.setValue('minutes', 0)

  }, [paramCategory, form]);

  useEffect(() => {
    console.log("use effect working : ", paymentDone)
    if (paymentDone) {
      console.log('inside working')
      submitHandle()
      setFormDone(false)
    }
  }, [paymentDone])

  console.log('form.watch(step1Fields) ', form.formState.errors)

  useEffect(() => {
    const currentError = error;
    if (currentError) {
      console.log("canceling error ", currentError)
      setTimeout(() => {
        setError('')
      }, 2500)
    }
  }, [error, form.formState.errors]);


  function onSubmit(data: FieldValues) {
    console.log('submitt')
    const _data = data as HourlyFormDataProps
    const { bags, dropoff_location, payment_id, email, flight, hours, childs, minutes, name, passengers, phone, pickup_time, pickup_date, pickup_location, stop_1, stop_2, stop_3 } = _data;
    console.log('_data : ', _data)
    const _pickup_time = `${pickup_time.hour.toString()} : ${pickup_time.minute.toString()} : ${pickup_time.period.toString()} `
    startSubmiting(async () => {
      const response = await createOrder({
        bags, dropoff_location, email, payment_id: payment_id ?? 'N/A', flight: flight ?? 'N/A', hours, childs, minutes, name, passengers, phone, pickup_time: _pickup_time, pickup_date, pickup_location,
        price,
        car,
        distance,
        category: category ?? 'n/a', stop_1, stop_2, stop_3
      });

      console.log('response : ', response)
      if (response.status === 201 && response.data )  {
        if(!paymentDone){
          setOrderId(response.data.id)
          setFormDone(true)
          return;
        }
        setIsOrderPlaced(true);
        setStep(0)
        return;
      }
      setError(response.error)


    })
  }


  async function NextStep() {

    if (step === 1) {
      console.log("one")
      const stopsFields: FormFieldTypes[] = []
      stops.map((_, index) => {
        const item = `stop_${index + 1}` as FormFieldTypes;
        stopsFields.push(item)
      })
      const output = await form.trigger([...step1Fields, ...stopsFields], { shouldFocus: true })
      let isStopError = false;

      stopsFields.map((item) => {
        if (!form.getValues(item)) {
          form.setError(item, { message: `Please Chose ${item.replace('_', ' ').toUpperCase()}` })
          isStopError = true;
        }
      })
      if (!output || isStopError) {
        setError('All Fields Required')

        return
      }

      if ('road-trips' === category) {
        console.log("working 1");
        if (!fromPlace || !toPlace) {
          setError('To and From Places are not selected')
          return;
        }
        startCalculatingPrice(async () => {
          console.log("working :: ");
          const origin = fromPlace.geometry.location;
          const destination = toPlace.geometry.location;
          let stop1Origin: locationProps | null = null, stop2Origin: locationProps | null = null, stop3Origin: locationProps | null = null, stop1 = ',', stop2 = ',', stop3 = ',';

          if (stops.length > 0 && stop1Place) {
            stop1Origin = stop1Place.geometry.location;
          }
          if (stops.length > 1 && stop2Place) {
            stop2Origin = stop2Place.geometry.location;
          }
          if (stops.length > 2 && stop3Place) {
            stop3Origin = stop3Place.geometry.location;
          }

          console.log("origin : ", origin.lat());
          console.log("destination : ", destination.lat());
          const from = origin.lat() + "," + origin.lng();
          const to = destination.lat() + "," + destination.lng();
          if (stop1Origin) {

            stop1 = stop1Origin.lat() + "," + stop1Origin.lng();
          }
          if (stop2Origin) {

            stop2 = stop2Origin.lat() + "," + stop2Origin.lng();
          }
          if (stop3Origin) {
            stop3 = stop3Origin.lat() + "," + stop3Origin.lng();
          }
          const res = await calculateDistance({ from, to, stop1, stop2, stop3 });
          console.log("ressss ::: ", res);
          if (res.status !== 200 || !res.distance) {
            setError(res.error);
            return;
          }

          setDistance(Number(res.distance.toFixed(2)));

          setStep(prev => ++prev)

        });
      } else if (category === 'hourly-rates') {

        setStep(prev => ++prev)
      }
    } else if (step === 2) {
      console.log("car : ", car)
      console.log("price : ", price)
      if (car && price) {
        setStep(prev => ++prev)
      } else {
        setError('Please Select Car')
      }
    }
  }

  console.log('step : ', step)
  console.log('category : ', category)


  const CarsList = ({ category }: { category: keyof CarsDataTypes, }) => {
    console.log('category : ', category)
    if (step !== 2) {
      return <div>Step Noy Correct</div>
    }
    return (
      <div className='w-full flex flex-col gap-10'>

        <div className='flex flex-col gap-5 w-full'>
          {distance == 0 && !error && category === 'road-trips' && <div>Your Place Distance is 0</div>}
          {allCars.map((value, index) => {
            let _price = 0
            if (category === 'hourly-rates') {
              const hours = form.getValues('hours')
              const minutes = form.getValues('minutes') / 60
              console.log('hours : ', hours)
              console.log('minutes : ', minutes)

              _price = Number((((hours + minutes) >= 2? (hours + minutes) : 2) * Number(value.hourly)).toFixed(2));
            }
            else if (category === 'road-trips') {
              if (distance < 10) {
                _price = value.under10
              } else if (distance < 20) {
                _price = value.under20
              } else {
                _price = value.under20 + ((distance - 20) * value.price)
              }
            }
            if (stops.length > 0) {
              _price += value.stop * stops.length
            }
            if (form.watch('childs') > 0) {
              _price += 10 * form.watch('childs')
            }
            if (form.watch('bags') > 0) {
              _price += 15
            }
            console.log("category ", category)
            console.log("_price ", _price)
            console.log("distance ", distance)
            // _price = Number(_price.toFixed(0))


            return <div key={index} className={`w-full max-sm:flex flex-col sm:grid sm:grid-cols-4 rounded-sm  max-sm:gap-2  sm:divide-x divide-gray-500  p-2   ${car === value.name ? 'bg-blue-300 shadow-2xl' : 'bg-gray-100 hover:bg-gray-300 hover:shadow-lg'} `}>

              <div className=' overflow-hidden sm:p-2 flex flex-col gap-1 sm:gap-2 w-full'>
                <div className='w-full rounded-sm overflow-hidden h-40 '>
                  <Image src={value.image} alt={value.name} className='object-cover w-full h-full object-center' />
                </div>
              </div>


              <div className='flex flex-col gap-1 sm:gap-2 w-full col-span-2 sm:px-2'>
                <h3 className=' font-bold  text-xl sm:text-3xl'>{value.name}</h3>
                <div className='flex flex-col gap-1 sm:gap-2 max-sm:text-sm'>
                  <div className='flex items-center text-sm gap-2'><CarFront color='black' className='max-sm:w-4' /><p>{value.cars}</p></div>
                  {/* <div className='flex items-center text-sm gap-2'><Users color='black' className='max-sm:w-4' /><p>Up to {value.persons} Passengers</p></div> */}
                </div>
              </div>

              <div className='flex flex-col w-full gap-1 sm:gap-5 justify-center sm:p-2'>


                <div className='text-lg sm:text-xl justify-center font-semibold flex items-center gap-2'><div>Price: </div><div className='font-bold'>£ {_price.toFixed(2)} </div></div>

                <div onClick={() => { console.log("_price.toFixed(2) ", _price), setCar(value.name); setPrice(Number(_price)); setStep(prev => ++prev) }} className='text-center bg-black hover:shadow-lg hover:texl-lg rounded-sm p-2 text-white font-semibold cursor-pointer'>

                  <p className='text-xl'>SELECT</p>
                </div>


              </div>

            </div>
          })}
        </div>
        {distance > 0 && <div className='flex items-center gap-2 text-center justify-center bg-black text-white text-lg font-semibold p-2 rounded-sm'>
          <p>Distance : </p>
          <p>{distance.toFixed(2)} KM</p>
        </div>}
      </div>
    );
  };

  const submitHandle = () => {
    const _stops = stops.length;
    for (let i = 1; i <= 3; i++) {
      if (_stops < i) {
        form.clearErrors(`stop_${i}` as FormFieldTypes)
      }
    }
    for (let i = 0; i < 10; i++) {

      console.log("working.......")
    }
    form.trigger()
  console.log("errors : ",form.formState.errors)
  console.log("errors : ", Object.entries(form.formState.errors).length===0)
    
      form.handleSubmit(onSubmit)();
    
  }

  return (
    <div className='w-full flex flex-col gap-6 sm:gap-14 max-w-screen-lg mx-auto'>
      {/* steps */}
      {!isOrderPlaced && <div className='flex items-center w-full gap-3 justify-between max-w-[90%] mx-auto '>
        <div className='cursor-pointer' onClick={() => {
          if (paymentDone) return;
          if (step > 1) {
            setStep(1)
          }
        }}>

          <Circle active={step >= 1} text='1' title='WHERE & WHEN' />
        </div>
        <div className={cn('w-full h-1 rounded-full bg-gray-400', step > 1 && 'bg-black')}></div>
        <div className='cursor-pointer' onClick={() => {
          if (paymentDone) return;
          if (step === 1) {
            NextStep()
          } else if (step === 3) {
            setStep(2)
          }
        }}>

          <Circle active={step >= 2} text='2' title='SELECT VEHICLE' />
        </div>
        <div className={cn('w-full h-1 rounded-full bg-gray-400', step > 2 && 'bg-black')}></div>
        <div className='cursor-pointer' onClick={() => {
          if (paymentDone) return;
          if (step === 2) {
            if (car) {
              setStep(prev => prev + 1)
            } else {
              setError('Please Select Car')
            }
          }
        }}>

          <Circle active={step >= 3} text='3' title='PAYMENT CONFIRM' />
        </div>

      </div>}



      <div className='flex flex-col gap-6 w-full max-w-screen-lg  border px-2 sm:px-4 py-5 mx-auto bg-white'>
        <div className='flex items-center justify-between'>

          <h2 className='text-xl sm:text-2xl text-black max-md:hidden'>
            {step === 1 && 'WHERE & WHEN'}
            {step === 2 && 'SELECT VEHICLE'}
            {step === 3 && 'PAYMENT CONFIRM'}
          </h2>

          <div className={`md:flex md:items-center max-md:grid grid-cols-2 max-md:gap-5 max-md:w-full max-md:p-2 max-md:bg-gray-200 max-md:rounded-md  ${step === 1 ? 'visible' : 'hidden'}`}>
            <div onClick={() => { setCategory('road-trips') }} className={cn(' px-2 py-2 border max-md:rounded-md border-black cursor-pointer  text-center ', category !== 'hourly-rates' ? 'bg-black text-white font-semibold' : 'text-gray-700 bg-white/80  md:bg-transparent')}>TRANSFER</div>
            <div onClick={() => { setCategory('hourly-rates') }} className={cn(' px-2 py-2 max-md:rounded-md border border-black text-center  cursor-pointer', category === 'hourly-rates' ? 'bg-black text-white font-semibold' : 'text-gray-700 bg-white/80 md:bg-transparent ')}>HOURLY</div>

          </div>

        </div>

        {/* order place */}
        {isOrderPlaced && (
          <div className="w-full flex justify-center py-10">
            <div className="max-w-screen-sm w-full p-3 sm:p-8 bg-black text-white rounded-sm shadow-xl space-y-6">
              <div className="flex justify-center">
                <div className="bg-green-600 text-black p-3 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.07-9.707a1 1 0 00-1.414 0L10 11.586 7.354 9.93a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-center text-2xl font-extrabold text-green-600">
                Order Placed Successfully!
              </h2>

              <p className="text-center text-lg font-medium text-gray-300">
                Thank you for placing your order with us.
                <br />
                Please check your Email (
                <span className="text-green-600">{form.getValues("email")}</span>) for the order confirmation and further details.
              </p>

              <div className="text-center space-y-4">
                <Link
                  href="/"
                  className="inline-block font-semibold bg-green-600 px-6 py-3 rounded-sm text-white shadow-md hover:bg-green-600/80 transition-all text-lg"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        )}






        {/* form ui */}
        {!isOrderPlaced && <div className='flex flex-col gap-5 w-full'>

          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="">

              {/* step 1 */}
              <div className={`flex w-full ${step === 1 ? 'visible' : 'hidden'}`}>
                <div className={cn('w-0 transition-all duration-500 delay-300', category === 'hourly-rates' ? 'h-20' : 'h-0')}></div>
                <div className={cn('grid grid-cols-2 gap-5 overflow-hidden py-6 transition-all duration-300 pb-6  ', category === 'hourly-rates' ? 'opacity-100 w-full  h-full' : 'opacity-0 w-0 h-0 pb-0')}>
                  <FormField
                    control={form.control}
                    name="hours"
                    render={({ field }) => (
                      <FormItem className={cn("flex flex-col")}>
                        <FormLabel className="">Hours  </FormLabel>

                        <div className='w-full rounded-sm  flex items-center border border-gray-500  overflow-hidden '>
                          <div onClick={() => { if (field.value === 0) { return } form.formState.errors.hours = undefined; field.onChange(--field.value) }} >
                            <IncrementDecrementButtont text='-' />
                          </div>
                          <div className='w-full text-center rounded-sm p-2 font-semibold leading-3  max-sm:text-sm'>{field.value}</div>

                          <div onClick={() => { form.formState.errors.hours = undefined; field.onChange(++field.value); }}> <IncrementDecrementButtont text='+' /></div>
                        </div>
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="minutes"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">Minutes</FormLabel>

                        <div className='w-full rounded-sm  flex items-center border border-gray-500  overflow-hidden '>
                          <div onClick={() => { if (field.value === 0) { return } form.formState.errors.minutes = undefined; field.onChange(field.value - 5) }} >

                            <IncrementDecrementButtont text='-' />
                          </div>

                          <div className='w-full text-center rounded-sm p-2 font-semibold leading-3 max-sm:text-sm'>{field.value}</div>
                          <div onClick={() => { if (field.value === 55) { return } form.formState.errors.minutes = undefined; field.onChange(field.value + 5) }}> <IncrementDecrementButtont text='+' /></div>
                        </div>

                        {/* <FormDescription>
    Please select your dropoff location.
  </FormDescription> */}
                        <FormMessage color='red' className="text-red-500" />

                      </FormItem>
                    )}
                  />
                </div>
              </div>


              <div className={`space-y-6 text-sm  ${step === 1 ? 'visible' : 'hidden'}`}>



                <div className=' grid grid-cols-2 gap-5'>


                  <FormField
                    control={form.control}
                    name="pickup_date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Pickup Date</FormLabel>
                        <Popover open={dateOpen} onOpenChange={setDateOpen}>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-medium",
                                  !field.value && "text-gray-400 font-normal"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarDays className="ml-auto h-4 w-4 " />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              className=''
                              onSelect={(event) => {
                                form.formState.errors.pickup_date = undefined;
                                field.onChange(event)
                                setDateOpen(false)
                              }}
                              disabled={(date) =>
                                date <= new Date()
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pickup_time"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Pick a Time</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full text-start flex justify-between items-center font-medium",
                                  !field.value && "text-gray-400 font-normal"
                                )}
                              >
                                {field.value ? (
                                  <span>
                                    {field.value?.hour ? field.value.hour.toString().padStart(2, "0") : 'hour'}:{field.value?.minute ? field.value.minute.toString().padStart(2, "0") : '00'} {field.value?.period ? field.value.period : 'period'}
                                  </span>
                                ) : (
                                  <span>Pick a time</span>
                                )}
                                <TimerIcon className="ml-auto h-4 w-4 " />

                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="max-w-full w-fit h-40  p-2 overflow-hidden bg-white" align="start">
                            <div className="flex items-start justify-start gap-3 max-h-full h-full overflow-hidden">
                              {/* Hours */}
                              <div className='flex flex-col py-1 rounded-sm border border-gray-300 text-center max-h-full h-full overflow-y-auto overflow-hidden w-fit '>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((item) => (
                                  <div className={`py-1 px-2 cursor-pointer ${field.value?.hour === item ? 'bg-blue-500 text-white' : 'bg-white'}`} key={item} onClick={() => {
                                    form.formState.errors.pickup_time = undefined;
                                    field.onChange({ period: field.value?.period ? field.value.period : 'AM', minute: isNaN(field.value?.minute) ? 0 : field.value.minute, hour: item })
                                  }
                                  } >{item}</div>
                                ))}
                              </div>
                              {/* Minutes */}
                              <div className='flex flex-col py-1 rounded-sm border border-gray-300 text-center max-h-full h-full overflow-y-auto overflow-hidden w-fit'>
                                {Array.from({ length: 12 }, (_, i) => i * 5).map((item) => (
                                  <div
                                    className={`py-1 px-2  cursor-pointer  ${field.value?.minute === item ? 'bg-blue-500 text-white' : 'bg-white'}`}
                                    key={item}
                                    onClick={() => {
                                      form.formState.errors.pickup_time = undefined;
                                      field.onChange({ ...field.value, minute: item });
                                    }}
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>


                              {/* Period */}
                              <div className='flex flex-col py-1 rounded-sm border border-gray-300 text-center max-h-full h-full overflow-y-auto overflow-hidden w-fit '>

                                <div className={`py-1 px-2  cursor-pointer  ${field.value?.period === "AM" ? 'bg-blue-500 text-white' : 'bg-white'}`} onClick={() => {
                                  form.formState.errors.pickup_time = undefined;
                                  field.onChange({ ...field.value, period: "AM" })
                                }
                                } >AM</div>
                                <div className={`py-1 px-2 ${field.value?.period === "PM" ? 'bg-blue-500 text-white' : 'bg-white'}`} onClick={() => {
                                  form.formState.errors.pickup_time = undefined;
                                  field.onChange({ ...field.value, period: "PM" })
                                }
                                } >PM</div>

                              </div>

                            </div>
                          </PopoverContent>
                        </Popover>
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />

                </div>
                <FormField
                  control={form.control}
                  name="pickup_location"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1 w-full relative p-2 rounded-sm bg-gray-100">

                      <FormLabel className="">Pickup Location</FormLabel>

                      <div className="w-full rounded-sm text-black">
                        {<div></div>}
                        {!isLoaded ? (
                          <div className="text-center p-3 rounded-sm border border-gray-500 w-full">Loading...</div>
                        ) : (
                          <Autocomplete
                            options={{
                              componentRestrictions: { country: "gb" },
                            }}
                            onLoad={(autocomplete) => (fromRef.current = autocomplete)}
                            onPlaceChanged={() => {
                              form.formState.errors.pickup_location = undefined;
                              if (fromRef.current) {
                                const place = fromRef.current.getPlace();
                                if (place.formatted_address && place?.geometry?.location) {


                                  setFromPlace(place as Place);
                                  field.onChange(place.formatted_address);
                                }
                                console.log('place :: ', place);
                              }
                            }}

                            // options={{
                            //   componentRestrictions: { country: ['de'] },
                            // }}
                            className='border-none'
                          >
                            <div className='flex border border-gray-700 rounded-sm overflow-hidden'>
                              <div className='w-24 sm:w-28 flex text-gray-500 items-center gap-1 bg-gray-100 p-1 max-sm:text-xs '>
                                <p>*Pickup</p> <Search className='w-4 sm:w-6' />
                              </div>
                              <input
                                placeholder="Please Enter Pickup Location"
                                className="w-full p-2 text-black"
                              />
                              <div className='px-2 flex items-center justify-center'>

                                <Pencil className='w-4 sm:w-5' color='black' />
                              </div>
                            </div>
                          </Autocomplete>
                        )}
                      </div>

                      {/* <FormDescription>
                    Please select your pickup location.
                  </FormDescription> */}
                      <FormMessage color='red' className="text-red-500" />
                    </FormItem>
                  )}
                />
                {stops.map((_, index) => {

                  return <FormField
                    control={form.control}
                    key={index}
                    name={`stop_${index + 1}` as FormFieldTypes}
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1 w-full relative p-2 rounded-sm bg-gray-100">
                        <FormLabel className="">Stop {index + 1}</FormLabel>

                        <div className="w-full rounded-sm text-black">
                          {!isLoaded ? (
                            <div className="text-center p-3 rounded-sm border border-gray-500 w-full">Loading...</div>
                          ) : (
                            <Autocomplete
                              options={{
                                componentRestrictions: { country: "gb" },
                              }}
                              onLoad={(autocomplete) => {
                                if (index === 0) {
                                  return stop1Ref.current = autocomplete
                                }
                                else if (index === 1) {
                                  return stop2Ref.current = autocomplete
                                }
                                else if (index === 2) {
                                  return stop3Ref.current = autocomplete
                                }
                              }}
                              onPlaceChanged={() => {
                                if (index === 0) {
                                  form.formState.errors.stop_1 = undefined;
                                  if (stop1Ref.current) {
                                    const place = stop1Ref.current.getPlace();
                                    if (place.formatted_address) {
                                      setStop1Place(place as Place)
                                      field.onChange(place.formatted_address);
                                    }
                                    console.log('place :: ', place);
                                  }
                                }
                                else if (index === 1) {
                                  form.formState.errors.stop_2 = undefined;
                                  if (stop1Ref.current) {
                                    const place = stop2Ref.current?.getPlace();
                                    if (place?.formatted_address) {
                                      setStop2Place(place as Place)
                                      field.onChange(place.formatted_address);
                                    }
                                    console.log('place :: ', place);
                                  }
                                }
                                else if (index === 2) {
                                  form.formState.errors.stop_3 = undefined;
                                  if (stop1Ref.current) {
                                    const place = stop3Ref.current?.getPlace();
                                    if (place?.formatted_address) {
                                      setStop3Place(place as Place)
                                      field.onChange(place.formatted_address);
                                    }
                                    console.log('place :: ', place);
                                  }
                                }

                              }}
                              // options={{
                              //   componentRestrictions: { country: ['de'] },
                              // }}
                              className='border-none'
                            >
                              <div className='flex border border-gray-700 rounded-sm overflow-hidden'>
                                <div className='w-24 sm:w-28 flex text-gray-500 items-center gap-1 bg-gray-100 p-1 max-sm:text-xs '>
                                  <p>*Stop {index + 1}</p> <Search className='w-4 sm:w-6' />
                                </div>
                                <input
                                  placeholder={`Please Enter Stop ${index + 1} Location`}
                                  className="w-full p-2  text-black"
                                />
                                <div className='px-2 flex items-center justify-center'>

                                  <Pencil className='w-4 sm:w-5' color='black' />
                                </div>
                              </div>
                            </Autocomplete>
                          )}
                        </div>

                        {/* <FormDescription>
                    Please select your dropoff location.
                  </FormDescription> */}
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />
                })}
                <div className='flex flex-col w-full gap-1'>

                  <FormField
                    control={form.control}
                    name="dropoff_location"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-1 w-full relative p-2 rounded-sm bg-gray-100">
                        <FormLabel className="">Dropoff Location</FormLabel>

                        <div className="w-full rounded-sm text-black">
                          {!isLoaded ? (
                            <div className="text-center p-3 rounded-sm border border-gray-500 w-full">Loading...</div>
                          ) : (
                            <Autocomplete
                              options={{
                                componentRestrictions: { country: "gb" },
                              }}
                              onLoad={(autocomplete) => (toRef.current = autocomplete)}
                              onPlaceChanged={() => {
                                form.formState.errors.dropoff_location = undefined;
                                if (toRef.current) {
                                  const place = toRef.current.getPlace();
                                  if (place.formatted_address) {
                                    setToPlace(place as Place)
                                    field.onChange(place.formatted_address);
                                  }
                                  console.log('place :: ', place);
                                }
                              }}
                              // options={{
                              //   componentRestrictions: { country: ['de'] },
                              // }}
                              className='border-none'
                            >
                              <div className='flex border border-gray-700 rounded-sm overflow-hidden'>
                                <div className='w-24 sm:w-28 flex text-gray-500 items-center gap-1 bg-gray-100 p-1 max-sm:text-xs '>
                                  <p>*Dropoff</p> <Search className='w-4 sm:w-6' />
                                </div>
                                <input
                                  placeholder="Please Enter Drop Off Location"
                                  className="w-full p-2  text-black"
                                />
                                <div className='px-2 flex items-center justify-center'>

                                  <Pencil className='w-4 sm:w-5' color='black' />
                                </div>
                              </div>
                            </Autocomplete>
                          )}
                        </div>

                        {/* <FormDescription>
                    Please select your dropoff location.
                  </FormDescription> */}
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <div className='flex w-full justify-end items-center gap-2'>
                    {stops.length > 0 && <div onClick={() => {
                      const _stops = stops;
                      form.setValue(`stop_${stops.length}` as FormFieldTypes, undefined)
                      setStops([..._stops.slice(0, stops.length - 1)])
                    }} className=' w-fit px-2 rounded-sm bg-red-500 text-white text-xs font-semibold cursor-pointer hover:underline flex items-center gap-1'>
                      <p>Delete Stop</p>
                      <Trash2 className='w-3' color='white' />
                    </div>}
                    {stops.length < 3 && <div onClick={() => { setStops([...stops, true]) }} className=' w-fit px-2 rounded-sm text-black text-xs font-semibold cursor-pointer hover:underline flex items-center gap-1'>
                      <p>Add Stop</p>
                      <SquarePlus className='w-3' color='black' />
                    </div>}

                  </div>
                </div>

                <div className='grid sm:grid-cols-3 gap-5'>

                  <FormField
                    control={form.control}
                    name="passengers"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">*Passenger</FormLabel>

                        <div className='w-full rounded-sm  flex items-center border border-gray-500  overflow-hidden '>
                          <div onClick={() => { if (field.value === 1) { return } form.formState.errors.passengers = undefined; field.onChange(--field.value) }} >

                            <IncrementDecrementButtont text='-' />
                          </div>

                          <div className='w-full text-center rounded-sm p-2 font-semibold  max-sm:text-sm'>{field.value}</div>
                          <div onClick={() => { if (field.value === 6) { return } form.formState.errors.passengers = undefined; field.onChange(++field.value) }}> <IncrementDecrementButtont text='+' /></div>
                        </div>

                        {/* <FormDescription>
                    Please select your dropoff location.
                  </FormDescription> */}
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />



                  <FormField
                    control={form.control}
                    name="childs"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">Child Seat's (10£ each)</FormLabel>

                        <div className='w-full rounded-sm  flex items-center border border-gray-500  overflow-hidden '>
                          <div onClick={() => { if (field.value === 0) { return } form.formState.errors.childs = undefined; field.onChange(--field.value) }} >

                            <IncrementDecrementButtont text='-' />
                          </div>

                          <div className='w-full text-center rounded-sm  p-2 font-semibold  max-sm:text-sm'>{field.value}</div>
                          <div onClick={() => { if (field.value === 6) { return } form.formState.errors.childs = undefined; field.onChange(++field.value) }}> <IncrementDecrementButtont text='+' /></div>
                        </div>

                        {/* <FormDescription>
                    Please select your dropoff location.
                  </FormDescription> */}
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bags"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">Meet & Greet (15£ each)</FormLabel>

                        <div className='w-full rounded-sm  flex items-center border border-gray-500  overflow-hidden '>
                          <div onClick={() => { if (field.value === 0) { return } form.formState.errors.bags = undefined; field.onChange(--field.value) }} >

                            <IncrementDecrementButtont text='-' />
                          </div>

                          <div className='w-full text-center rounded-sm  p-2 font-semibold  max-sm:text-sm'>{field.value}</div>
                          <div onClick={() => { if (field.value === 1) { return } form.formState.errors.bags = undefined; field.onChange(++field.value) }}> <IncrementDecrementButtont text='+' /></div>
                        </div>

                        {/* <FormDescription>
                    Please select your dropoff location.
                  </FormDescription> */}
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                {step === 1 && <button type="button" className='w-full hover:bg-black bg-black/80 hover:shadow-lg p-2 rounded-sm text-white font-semibold' onClick={NextStep}>{calculatingPrice ? 'Calculating Price ...' : 'Next'}</button>}
              </div>


              {/* step 2 */}

              <div className={`w-full  ${step === 2 ? 'visible' : 'hidden'}`}>

                {category && <CarsList category={category} />}
              </div>


              {/* step 3 */}

              {step === 3 && <div className='flex flex-col gap-5 w-full'>

                <div className='grid sm:grid-cols-2 gap-5 text-sm'>
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">Name</FormLabel>
                        <div className='w-full rounded-sm border border-gray-500 flex items-center gap-2 p-2'>
                          <input
                            {...field}
                            className='w-full p-2 text-gray-800 border-none outline-none'
                            placeholder="Enter your name"
                          />
                        </div>
                        <FormMessage color='red' className='text-red-500' />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">Email</FormLabel>
                        <div className='w-full rounded-sm border border-gray-500 flex items-center gap-2 p-2'>
                          <input
                            {...field}
                            className='w-full p-2 text-gray-800 border-none outline-none'
                            placeholder="Enter your email"
                          />
                        </div>
                        <FormMessage color='red' className='text-red-500' />
                      </FormItem>
                    )}
                  />

                  {/* Phone Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">Phone</FormLabel>
                        <div className='w-full rounded-sm border border-gray-500 flex items-center gap-2 p-2'>
                          <input
                            {...field}
                            type="tel"
                            className='w-full p-2 text-gray-800 border-none outline-none'
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <FormMessage color='red' className='text-red-500' />
                      </FormItem>
                    )}
                  />

                  {/* flight Field */}
                  <FormField
                    control={form.control}
                    name="flight"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="">Flight</FormLabel>
                        <div className='w-full rounded-sm border border-gray-500 flex items-center gap-2 p-2'>
                          <input
                            {...field}

                            className='w-full p-2 text-gray-800 border-none outline-none'
                            placeholder="Flight"
                          />
                        </div>
                        <FormMessage color='red' className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

              </div>}
              {error && <p className='text-center text-red-500'>{error}</p>}
              {paymentDone && <p className=' text-green-500 text-xl font-medium text-start mt-3'>Payment Done</p>}


              {step === 3 && <Button id='submitButton' type="button" onClick={submitHandle} className='w-full hover:bg-black bg-black/80 hover:shadow-lg p-2 mt-6 rounded-sm text-white font-semibold'>{isSubmiting ? 'Order Placing...' : 'Place Order'}</Button>}
              {/* { step === 3 && !paymentDone && <MyPaymentForm amount={price}   form={form as unknown as UseFormReturn<PaymentFormFields>} setPaymentDone={setPaymentDone} />} */}
             
            </form>
          </Form>
        </div>}
      </div>
          {step === 3 && !paymentDone && price && formDone &&  orderId && <StripePaymentForm amount={Number(price)}  orderId={orderId} setFormDone={setFormDone} />}
    </div>
  )
}

export default BookingForm