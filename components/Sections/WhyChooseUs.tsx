import { okTaxisContent } from "@/constants/homePageData"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
  export default function WhyChooseUs() {
    return (
      <section className="w-full m-auto py-12 md:py-16 lg:py-20">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              {okTaxisContent.heading}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {okTaxisContent.description}
            </p>
          </div>
          <div className="m-auto items-center grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {okTaxisContent.reasons.map((reason, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {reason.details}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mx-auto max-w-[700px] text-center text-gray-500 dark:text-gray-400">
            {okTaxisContent.footer}
          </div>
        </div>
      </section>
    )
  }
  
  