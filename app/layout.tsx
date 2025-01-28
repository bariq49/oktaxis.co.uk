import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StripeProvider from "@/components/BookingForm/PaymentCardModal/StripeProvider";
import Script from "next/script";

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
    icon: '/favicon.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Include Google Maps API script with 'places' library */}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          async
          defer
        ></script>

        
        {/* tag manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16550284687"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16550284687');
            `,
          }}
        ></script>



      </Head>

      <body className={`${roboto.variable} antialiased`}>
        <Header />
        <StripeProvider>{children}</StripeProvider>
        <Footer />
      </body>
    </html>
  );
}
