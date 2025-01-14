import { StatusCard } from '@/components/Sections/StatusCard';
import { useSearchParams } from 'next/navigation';
import React, { SetStateAction, useEffect } from 'react'

function PaymentDone({ setPaymentDone, paymentDone }: { setPaymentDone: React.Dispatch<SetStateAction<boolean>>, paymentDone:boolean }) {
    const search = useSearchParams()
    const paymentId = search.get("paymentId")

    useEffect(() => {
        if (paymentId) {
            setPaymentDone(true);
            document.body.style.overflow = 'hidden'
        }
    }, [paymentId])
    return (
        <div className={`absolute w-full h-full z-50 ${paymentDone ? "visible" : "hidden"} `}>
            <div className="w-full h-full bg-black/30 flex items-center justify-center transition-all duration-300 relative">

                <StatusCard type="success" onClose={() => { setPaymentDone(false) }} />
            </div>
        </div>
    )
}

export default PaymentDone