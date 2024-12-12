import { cn } from "@/lib/utils"

interface BookingStep {
  number: number
  title: string
  description: string
}

const bookingSteps: BookingStep[] = [
  {
    number: 1,
    title: "Easy Online Booking",
    description:
      "Head to our website and experience a booking system free of palaver. Select your service, schedule and preferred vehicle from the Oktaxis fleet with ease.",
  },
  {
    number: 2,
    title: "Choose Extra Services",
    description:
      "Choose a date and time and add any extra services you might need, such as luggage assistance, or special requests like child seats.",
  },
  {
    number: 3,
    title: "Confirmation",
    description:
      "When your booking is submitted, our team reviews the details and confirms them promptly so that every requirement is met to your satisfaction.",
  },
  {
    number: 4,
    title: "Seamless Chauffeur Coordination",
    description:
      "Your chauffeur will be on time and prepared to deliver a flawless journey. From start to finish, every detail reflects our commitment to excellence.",
  },
]

export default function BookingProcess() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our <span className="text-blue-600">Booking Process</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple and hassle-free way to book your journey with Oktaxis.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px]">
            <div className="relative w-full h-full">
              {/* Main line */}
              <div className="absolute w-[calc(100%-100px)] left-[50px] h-full bg-blue-600/20" />
              {/* Animated progress line */}
              <div className="absolute w-[calc(100%-100px)] left-[50px] h-full bg-blue-600 opacity-20">
                <div className="absolute inset-0 bg-blue-600">
                  <div className="absolute inset-0 animate-progress-line" />
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {bookingSteps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "flex flex-col items-center text-center group",
                  "transition-all duration-300 ease-in-out",
                  "hover:transform hover:-translate-y-1"
                )}
              >
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center",
                      "transition-transform duration-300 group-hover:scale-110",
                      "border-2 border-transparent group-hover:border-blue-600"
                    )}
                  >
                    <span className="text-xl font-semibold text-blue-600">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

