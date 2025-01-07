import React from 'react';

const PremiumTransportation = () => {
  return (
    <section className=" text-black py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-6">
          Premium Airport Transportation Services by Oktaxis
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We offer a variety of services to suit every travel need, ensuring luxury, comfort, and professionalism at every step.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl text-green-700 font-semibold mb-4">Private Airport Transfers</h2>
          <p className="text-gray-700 mb-4">
            Perfect for families, business travelers, and those seeking privacy.
          </p>
          <p className="text-gray-700">
            Features include direct routes and a fleet of luxurious sedans and SUVs.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl text-green-700 font-semibold mb-4">Chauffeur Services</h2>
          <p className="text-gray-700 mb-4">
            A high-end experience with professional drivers and top-of-the-line vehicles.
          </p>
          <p className="text-gray-700">
            Ideal for VIPs, corporate travel, and special occasions.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl text-green-700 font-semibold mb-4">Business Class Transfers</h2>
          <p className="text-gray-700">
            Tailored for busy professionals, ensuring punctuality and seamless coordination with your schedule.
          </p>
        </div>

        <h2 className="text-2xl text-green-700 font-semibold mb-6">Key Features of Oktaxis Premium Airport Transfers</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4 mb-6">
          <li><span className="text-green-700 font-semibold">24/7 Availability:</span> We&apo;re here whenever you need us, day or night.</li>
          <li><span className="text-green-700 font-semibold">Luxury Vehicles:</span> Travel in style with our premium fleet of sedans, SUVs, and executive cars.</li>
          <li><span className="text-green-700 font-semibold">Real-Time Tracking:</span> Track your driver&apo;s location and estimated arrival time through our intuitive system.</li>
          <li><span className="text-green-700 font-semibold">Luggage Assistance:</span> Friendly drivers assist with your luggage for a hassle-free experience.</li>
          <li><span className="text-green-700 font-semibold">Transparent Pricing:</span> Enjoy fixed rates without hidden fees or surprises.</li>
          <li><span className="text-green-700 font-semibold">Professional Drivers:</span> Our knowledgeable and courteous drivers enhance your travel experience.</li>
        </ul>

        <h2 className="text-2xl text-green-700 font-semibold mb-6">Airports Covered by Oktaxis</h2>
        <div className="mb-8">
          <h3 className="text-xl text-green-700 font-semibold mb-4">Manchester Airport Transfers</h3>
          <p className="text-gray-700">
            As one of the busiest UK airports, Manchester Airport demands efficient and reliable transportation. With Oktaxis, enjoy punctual, premium services that cater to both business and leisure travelers.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-green-700 font-semibold mb-4">Liverpool John Lennon Airport Transfers</h3>
          <p className="text-gray-700">
            Located close to Liverpool's vibrant city center, this hub is a gateway for business and cultural exploration. Oktaxis ensures smooth transfers with tailored routes and luxury vehicles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumTransportation;
