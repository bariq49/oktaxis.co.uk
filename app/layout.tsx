import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import StripeProvider from "@/components/BookingForm/PaymentCardModal/StripeProvider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const roboto = Roboto({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OkTaxis",
  description: "Generated by OkTaxis",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Metadata and necessary links are auto-handled by Next.js */}
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {/* Google Tag Manager */}
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16550284687"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16550284687');
            `,
          }}
        />

        {/* Google Maps API */}
        <Script
          id="google-maps"
          strategy="lazyOnload"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        />

        <Header />
        <StripeProvider>{children}</StripeProvider>
        <Footer />
      </body>
    </html>
  );
}