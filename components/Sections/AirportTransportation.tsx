import React from "react";

const AirportTransportation = () => {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden">

    <section className="bg-gradient-to-r  from-gray-50 via-white to-gray-100 text-black py-12 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-green-100/20 via-transparent to-white opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            Effortless Airport{" "}
          </span>
          <span className="text-black">Transportation Services</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-green-700">
          Premium Travel Solutions by Oktaxis
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
          Traveling can be an exciting adventure, but getting to and from the airport often presents challenges. At{" "}
          <span className="font-semibold text-green-700">Oktaxis</span>, we provide seamless and reliable airport transportation services in Manchester and Liverpool, ensuring your journey begins and ends on the right note. Whether you're traveling for business or leisure, our premium services are designed to cater to your needs with comfort, efficiency, and luxury.
        </p>

        {/* Why Choose Section */}
        <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">
          Why Reliable Airport Transportation Matters
        </h3>
        <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
          Choosing the right airport transfer service is crucial for a stress-free travel experience. At{" "}
          <span className="font-semibold text-green-700">Oktaxis</span>, we bridge the gap between your home, office, or hotel and major airports like Manchester Airport and Liverpool John Lennon Airport. Here's why travelers prefer our premium services:
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h4 className="text-green-700 font-bold text-lg mb-2">Time Efficiency</h4>
            <p className="text-gray-600 text-sm">
              Never worry about missing a flight; our services ensure punctual pick-ups and drop-offs.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h4 className="text-green-700 font-bold text-lg mb-2">Comfort and Convenience</h4>
            <p className="text-gray-600 text-sm">
              Experience a hassle-free journey with luxury vehicles and courteous drivers.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h4 className="text-green-700 font-bold text-lg mb-2">Safety First</h4>
            <p className="text-gray-600 text-sm">
              Licensed, insured, and well-trained drivers guarantee a secure ride.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h4 className="text-green-700 font-bold text-lg mb-2">Stress-Free Travel</h4>
            <p className="text-gray-600 text-sm">
              Skip the parking hassles and unpredictable public transportation.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="flex justify-center mt-12">
          <button className="bg-green-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-800 hover:shadow-2xl transition duration-300">
            Book Now
          </button>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-700 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-500 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
    </div>
  );
};

export default AirportTransportation;
