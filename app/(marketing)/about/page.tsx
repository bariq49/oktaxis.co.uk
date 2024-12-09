import Image from "next/image"
import HeroImg from "@/assets/aboutUsImages/hero-img.webp";
import { aboutUsContent } from "@/constants/aboutUsData" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url('${HeroImg.src}')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container m-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              {aboutUsContent.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-200">
              {aboutUsContent.hero.description}
            </p>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full m-auto py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {aboutUsContent.whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {aboutUsContent.whyChooseUs.subtitle}
            </p>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {aboutUsContent.whyChooseUs.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full m-auto py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container m-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutUsContent.features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center">
                <CardHeader>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="rounded-full object-fit"
                  />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full m-auto py-12 md:py-24 lg:py-32">
        <div className="container m-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutUsContent.services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-[200px]"
                />
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
