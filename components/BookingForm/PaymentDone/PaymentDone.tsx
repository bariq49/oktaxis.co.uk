import { StatusCard } from '@/components/Sections/StatusCard';
import { useSearchParams } from 'next/navigation';
import React, { SetStateAction, useEffect } from 'react'

function PaymentDone({ setPaymentDone }: { setPaymentDone: React.Dispatch<SetStateAction<boolean>> }) {
    const search = useSearchParams()
    const paymentId = search.get("paymentId")

    useEffect(() => {
        if (paymentId) {
            setPaymentDone(true);
            document.body.style.overflow = 'hidden'
        }
    }, [paymentId])
    return (
        <div className="absolute w-full h-full z-50 ">
            <div className="w-full h-full bg-black/30 flex items-center justify-center transition-all duration-300 relative">

                <StatusCard type="success" onClose={() => { setPaymentDone(false) }} />
            </div>
        </div>
    )
}

export default PaymentDone