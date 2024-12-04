import heroImg from "@/assets/homeImages/hero-img.jpg";
import vec1 from "@/assets/homeImages/vec1.jpg";
import vec2 from "@/assets/homeImages/vec2.jpg";
import vec3 from "@/assets/homeImages/vec3.jpg";
import vec4 from "@/assets/homeImages/vec4.jpg";
import FleetBg from "@/assets/vehicles/fleet_bg.jpg";
import { Facebook, Linkedin, Twitter, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";

// Vehicles...
import BMW from "@/assets/vehicles/bmw.jpg";
import MERC from "@/assets/vehicles/merc.jpg";
import Skoda from "@/assets/vehicles/skoda.jpg";
import Tesla from "@/assets/vehicles/tesla.jpg";
import Toyota from "@/assets/vehicles/toyota.jpeg";
import XLVAN from "@/assets/vehicles/xlvan.jpg";

// Vehicles for services section...
import Img1 from "@/assets/homeImages/img1.jpeg";
import Img2 from "@/assets/homeImages/img2.jpg";
import Img3 from "@/assets/homeImages/img3.jpg";
import Img4 from "@/assets/homeImages/img4.webp";
import Img5 from "@/assets/homeImages/img5.jpg";
import Img6 from "@/assets/homeImages/img6.jpg";

// About us page...
import BgImg from "@/assets/homeImages/about-us-bg-img.webp"
import TeslaImg from "@/assets/homeImages/about-us-tesla.webp"

export const homePageData = {
  // Hero Section...
  heroSection: {
    heading: "Welcome to Spotlimo",
    subheading: "Your premium transportation solution",
    description:
      "Experience the comfort and luxury of Spotlimo's top-tier services for all your travel needs. Whether it's an airport transfer, point-to-point, or hourly charter, we've got you covered.",
    backgroundImage: heroImg,
    ctaButton: {
      text: "Book Now",
      link: "/booking",
    },
  },

  // Trip Working Section...
  tripWorking: {
    title: "How Trip Works",
    description: "We are a pre-booked fixed-price taxi and minibus service",
    contents: [
      {
        title: "Where are you going?",
        description:
          "Provide your destination, dates, and group size, and we'll find the most competitive fares from our wide range of suppliers.",
        backgroundImage: vec1,
      },
      {
        title: "Choose your ride",
        description:
          "Pick your supplier based on price, customer reviews and the company's historical performance score.",
        backgroundImage: vec2,
      },
      {
        title: "Pay securely",
        description:
          "Make secure payments online using our trusted payment gateway. We accept VISA, MasterCard, and American Express, as well as Apple Pay and Google Pay wallets.",
        backgroundImage: vec3,
      },
      {
        title: "Ride with Trip",
        description:
          "That's it! You are all booked in! We will keep you up-to-date by emails and SMS.",
        backgroundImage: vec4,
      },
    ],
  },

  // Services Section...
  servicesSection: {
    title: "Our Services",
    description: "Discover our wide range of professional services tailored to your needs.",
    services: [
      {
        title: "Airport Transportation",
        image: Img1,
        description: "Reliable and punctual airport transfers for a stress-free journey.",
      },
      {
        title: "Chauffeur Services",
        image: Img2,
        description: "Professional chauffeurs for a luxurious and comfortable ride.",
      },
      {
        title: "Hourly Executive Transportation",
        image: Img3,
        description: "Flexible hourly service for business professionals on the go.",
      },
      {
        title: "Wedding Limo Services",
        image: Img4,
        description: "Elegant transportation to make your special day even more memorable.",
      },
      {
        title: "Interview Service",
        image: Img5,
        description: "Arrive at your interview relaxed and confident with our reliable service.",
      },
      {
        title: "Corporate Limo Transportation",
        image: Img6,
        description: "Impress clients and partners with our premium corporate transportation.",
      },
    ],
  },

  // Our Story Section...
  ourStory: {
    leftSec: {
      title: "Our Story",
      description: "Voyage is an executive chauffeur dedicated to those who appreciate luxurious travel across the UK",
      button: "Explore",
    },
    rightSec: {
      title: "Manchester Airport Taxi/ Instant Manchester Airport Transfer Quote",
      description: `
      Find the cheapest taxi to or from Manchester Airport with OKTAXIS. Book a taxi to Manchester Airport Online. Top-tier Luxury, Comfort, Style, and Reliability await.

      OKTAXIS offers guaranteed pickups and tracks flight landing times. If a flight is delayed or early, they will adjust the requested time.

      OKTAXIS offers luxury airport transfers and taxis to or from Manchester Airport and Liverpool Airport. We aim to ensure that customers arrive at the airport on time and are picked up on return in a timely manner.

      OKTAXIS: Offers pre-booked vehicles, private car services, and hourly services.
      OKTAXIS: Offers Manchester Airport transfers and Liverpool Airport Transfers.
    `,
    },
  },

  // Fleets Page...
  ourFleets: {
    serviceName: "Oktaxis",
    title: "Our Fleets",
    bgImg: FleetBg,
    fleet: [
      { name: "BMW Series", image: BMW },
      { name: "Mercedes Benz", image: MERC },
      { name: "Skoda Superb", image: Skoda },
      { name: "Tesla Model S", image: Tesla },
      { name: "Toyota Prius", image: Toyota },
      { name: "XL Van", image: XLVAN },
    ],
  },

// About Page...
aboutContent: {
  bgImg: BgImg,
  contentImg: TeslaImg,
  title: "About Us",
  whoWeAre: `
    Manchester Airport Taxis (oktaxis.co.uk) began operations in 2018 with 
    the mission to provide competitive and reliable taxi and minibus transfer 
    services for both Manchester and Liverpool John Lennon airports. 
    What started as a small operation with just three drivers has rapidly 
    expanded, thanks to our dedication to offering high-quality service, 
    low-cost fares, and a modern fleet of vehicles.
  `,
  additionalInfo: `
    We take immense pride in delivering exceptional taxi airport transfer 
    services, available day and night, with no surcharges during the night 
    hours. Whether you're a private customer or a business traveler, our 
    fully trained and CRB-approved drivers ensure your journey is smooth, 
    safe, and stress-free.
  `,
  contactDetails: {
    address: "Bailey Lane, Airport, Wythenshawe, Manchester M90 4AN",
    email: "info@oktaxis.co.uk",
    phone: "07788710290",
    whatsapp: "07788710290",
  },
},


  // Testimonials Section
  testimonialsSection: {
    title: "What Our Clients Say",
    testimonials: [
      {
        name: "John Doe",
        feedback:
          "Spotlimo provided an exceptional service for my business trip. Highly recommended!",
        image: "/images/testimonial1.jpg",
      },
      {
        name: "Jane Smith",
        feedback:
          "Comfortable and reliable service. I'll definitely book again!",
        image: "/images/testimonial2.jpg",
      },
    ],
  },

  // Contact Section
  contactFormSection: {
    title: "Contact Us",
    subtitle: "Get in Touch with Oktaxis",
    description: "Our professional drivers offer prompt pick-and-drop services.",
  },

  // Footer...
  footer: {
    title: "Oktaxis",
    description:
      "Oktaxis introduces the top-rated limousine and car service in Illinois and its suburban areas.",
    socialLinks: [
      { icon: Facebook, href: "https://www.facebook.com/share/1AoLuwA75A/?mibextid=LQQJ4d", label: "Facebook" },
      // { icon: Linkedin, href: "#", label: "LinkedIn" },
      // { icon: Twitter, href: "#", label: "Twitter" },
      // { icon: Youtube, href: "#", label: "YouTube" },
      { icon: Instagram, href: "https://www.instagram.com/ok_taxis?igsh=MWV2aDJmc3FuYWVxNA==", label: "Instagram" },
    ],
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/fleet", label: "Our Services" },
      { href: "/driver", label: "Our Vehicles" },
      { href: "/contact", label: "Testimonials" },
    ],
    contact: {
      address: "07788710290",
      phone: "07788710290",
      email: "info@oktaxis.co.uk",
    },
  },
};
