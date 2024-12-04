import { homePageData } from "@/constants/homePageData"; 
import Image from "next/image";

const AboutPage = () => {
  const { aboutContent } = homePageData;

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[200px] lg:h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutContent.bgImg.src})` }}
      >
        {/* <h1 className="text-black text-4xl font-bold">{aboutContent.title}</h1> */}
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4">{aboutContent.whoWeAre}</p>
            <p className="text-gray-600">{aboutContent.additionalInfo}</p>
          </div>
          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={aboutContent.contentImg} // Replace with your actual image path
              alt="Our Company Building"
              width={500}
              height={300}
              className="rounded-lg shadow-lg "
            />
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-8 px-4 md:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Contact Details</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Address:</strong> {aboutContent.contactDetails.address}
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${aboutContent.contactDetails.email}`}
                className="text-blue-600 hover:underline"
              >
                {aboutContent.contactDetails.email}
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${aboutContent.contactDetails.phone}`}
                className="text-blue-600 hover:underline"
              >
                {aboutContent.contactDetails.phone}
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href={`https://wa.me/${aboutContent.contactDetails.whatsapp}`}
                className="text-blue-600 hover:underline"
              >
                {aboutContent.contactDetails.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
