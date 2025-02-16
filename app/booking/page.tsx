import React from 'react'
import BookingForm from '@/components/BookingForm/NewBookingForm'


function Page() {
    return (
        <div className=' w-full'>
            <div className='w-full h-20 overflow-hidden bg-black/80'>
            </div>
                <div className='py-20 w-full'>
                   <BookingForm _category='road-trips'/>
                </div>
        </div>
    )
}

export default Page