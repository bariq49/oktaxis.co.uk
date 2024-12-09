import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { okTaxisContent } from "@/constants/homePageData"

export default function OurStory() {
  const { heading, description, reasons, footer } = okTaxisContent

  return (
    <>
      {/* First Section */}
      <section className="w-full py-12">
        <Card className="w-full max-w-[1200px] mx-auto">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h1 className="text-3xl font-bold">
                Manchester Airport Taxi/ Instant Manchester Airport Transfer Quote
              </h1>
              <div className="space-y-4 text-gray-600">
                <p>
                  Find the cheapest taxi to or from Manchester Airport with OKTAXIS. Book a taxi to Manchester Airport Online. Top-tier Luxury, Comfort, style, and reliability await.
                </p>
                <p>
                  OKTAXIS Offers guaranteed pickups and tracks flight landing times. If a flight is delayed or early, they will adjust the requested time.
                </p>
                <p>
                  OKTAXIS Offers luxury airport transfers and taxis to or from Manchester Airport and Liverpool Airport. We aim to ensure that customers arrive at the airport on time and are picked up promptly upon return.
                </p>
                <p>
                  <strong>OKTAXIS:</strong> Offers pre-booked vehicles, private car services, and hourly services.
                </p>
                <p>
                  <strong>OKTAXIS:</strong> Offers Manchester Airport transfers and Liverpool Airport Transfers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

