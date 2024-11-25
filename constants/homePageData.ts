import heroImg from "@/assets/homeImages/hero-img.jpg";
import vec1 from "@/assets/homeImages/vec1.jpg";
import vec2 from "@/assets/homeImages/vec2.jpg";
import vec3 from "@/assets/homeImages/vec3.jpg";
import vec4 from "@/assets/homeImages/vec4.jpg";
import FleetBg from "@/assets/vehicles/fleet_bg.jpg";
import { Facebook, Linkedin, Twitter, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react'

// Vehicles...
import BMW from "@/assets/vehicles/bmw.jpg"
import MERC from "@/assets/vehicles/merc.jpg"
import Skoda from "@/assets/vehicles/skoda.jpg"
import Tesla from "@/assets/vehicles/tesla.jpg"
import Toyota from "@/assets/vehicles/toyota.jpeg"
import XLVAN from "@/assets/vehicles/xlvan.jpg"

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
          "Pick your supplier based on price, customer reviews and the company's historical performance score",
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
          "That's it! You are all booked in! We will keep you up-to-date by emails and sms.",
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
        image: vec1,
        // href: "/services/airport",
        description: "Reliable and punctual airport transfers for a stress-free journey.",
      },
      {
        title: "Chauffeur Services",
        image: vec2,
        // href: "/services/chauffeur",
        description: "Professional chauffeurs for a luxurious and comfortable ride.",
      },
      {
        title: "Hourly Executive Transportation",
        image: vec3,
        // href: "/services/executive",
        description: "Flexible hourly service for business professionals on the go.",
      },
      {
        title: "Wedding Limo Services",
        image: vec4,
        // href: "/services/wedding",
        description: "Elegant transportation to make your special day even more memorable.",
      },
      {
        title: "Interview Service",
        image: vec1,
        // href: "/services/interview",
        description: "Arrive at your interview relaxed and confident with our reliable service.",
      },
      {
        title: "Corporate Limo Transportation",
        image: vec4,
        // href: "/services/corporate",
        description: "Impress clients and partners with our premium corporate transportation.",
      },
    ],
  },

  // Our Story Section...
  ourStory: {
    leftSec: {
      title: "Our Story",
      description: "Voyage is an executive chauffeur dedicated to those who appreciate luxurious travel across the UK",
      button: "Explore"
    },
    rightSec: {
      title: "Get to Know Us",
      description: "Experience the pinnacle of luxury and personalized chauffeur services with **Opulence Voyage Executive Chauffeur, the leading provider of elite transportation solutions across the UK. We redefine luxury travel by delivering an exceptional journey that transcends the ordinary. With a focus on elegance, privacy, and bespoke travel experiences, Opulence Voyage is the ultimate choice for discerning clients. Our premium fleet caters to business needs, leisure outings, and special events, ensuring every trip is marked by sophistication and comfort. Serving Liverpool, Manchester, Essex, London, and Kent, Opulence Voyage Executive Chauffeur combines luxury and professionalism to create a seamless and distinctive travel experience tailored just for you. Contact our team today at +34 617 55 36 80 or ====, connect with us on WhatsApp, or explore our social pages to learn more and receive a no-obligation quote."
    }

  },

  // Fleets Page...

 ourFleets: 
 {
  serviceName:"Okatxis",
  title: "Our Fleets",
  bgImg: FleetBg,
  fleet: [
    {
      name: "BMW Series",
      image: BMW,
  
    },
    {
      name: "Mercedes Benz",
      image: MERC,
    },
    {
      name: "Skoda Superb",
      image: Skoda,
  
    },
    {
      name: "Tesla Model S",
      image: Tesla,
  
    },
    {
      name: "Toyota Prius",
      image: Toyota,
  
    },
    {
      name: "XL Van",
      image: XLVAN,
  
    },
  ],
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
    description: `Our professional drivers offer prompt pick-and-drop services. Besides, our response time and impressive reputation make us the best and most reliable limo rental and car service provider in Illinois. So, contact us now if you want to spend less and hire the best.`,
  },
  

  // Footer...
  footer: {
    title: "Oktaxis",
    description:
      "Oktaxis introduces the top-rated limousine and car service in Illinois and its suburban areas. We make your transportation secure with professional and licensed drivers. Whether you are traveling to a nearby state, an airport, or a wedding, we try to make your drive memorable with reasonable rates. With an extensive network of affiliates and prompt response time, we prioritize customer satisfaction over anything else.",
    socialLinks: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Youtube, href: "#", label: "YouTube" },
      { icon: Instagram, href: "#", label: "Instagram" },
    ],
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Our Services" },
      { href: "/vehicles", label: "Our Vehicles" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact Us" },
    ],
    contact: {
      address: "1016 W Jackson Blvd Chicago IL 60607",
      phone: "630-290-3475",
      email: "contact@oktaxis.com",
    },
  },
};
