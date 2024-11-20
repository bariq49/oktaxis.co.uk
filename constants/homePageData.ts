import heroImg from "@/assets/Home Images/hero-img.jpg"
import vec1 from "@/assets/Home Images/vec1.jpg"
import vec2 from "@/assets/Home Images/vec2.jpg"
import vec3 from "@/assets/Home Images/vec3.jpg"
import vec4 from "@/assets/Home Images/vec4.jpg"

export const homePageData = {
    
    // Hero Section... 
    heroSection: {
      heading: "Welcome to Spotlimo",
      subheading: "Your premium transportation solution",
      description:
        "Experience the comfort and luxury of Spotlimo's top-tier services for all your travel needs. Whether it's an airport transfer, point-to-point, or hourly charter, we've got you covered.",
      backgroundImage: {heroImg}, 
      ctaButton: {
        text: "Book Now",
        link: "/booking",
      },
    },

    // Services Section....
    servicesSection: {
      title: "How Trip Works",
      description: "We are a pre-booked fixed-price taxi and minibus service",
      services: [
        {
          title: "Where are you going?",
          description:
            "Provide your destination, dates, and group size, and we'll find the most competitive fares from our wide range of suppliers.",
          backgroundImage: {vec1}
        },
        {
          title: "Choose your ride",
          description: "Pick your supplier based on price, customer reviews and the company's historical performance score",
          backgroundImage: {vec2}
        },
        {
          title: "Pay securely",
          description: "Make secure payments online using our trusted payment gateway. We accept VISA, MasterCard, and American Express, as well as Apple Pay and Google Pay wallets.",
          backgroundImage: {vec3}
        },
        {
          title: "Ride with Trip",
          description: "That's it! You are all booked in! We will keep you up-to-date by emails and sms.",
          backgroundImage: {vec4}
        },
      ],
    },

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
    contactSection: {
      title: "Get in Touch",
      description: "Contact us for bookings, inquiries, or support.",
      phone: "+1 (123) 456-7890",
      email: "support@spotlimo.com",
      address: "123 Limo Lane, Luxury City, CA 90210",
      mapEmbedUrl: "https://www.google.com/maps/embed?...", // Embed link for Google Maps
    },
  };
  