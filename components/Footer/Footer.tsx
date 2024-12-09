import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { homePageData } from "@/constants/homePageData";
import Logo from "@/assets/logo.png"
import Whatsapp from "@/assets/whatsapp.png";

export default function Footer() {
  const { footer } = homePageData;

  return (
    <>
      <footer className="w-full relative bg-white text-gray-950 pt-12 px-4 md:px-6 lg:px-8 border-t">
        <div className="fixed right-[1%] bottom-[4%]">
          <a href="https://wa.me/447788710290" target="_blank" rel="noopener noreferrer">
            <Image
              src={Whatsapp}
              alt="whatsapp logo"
              className="w-32 lg:w-40"
            />
          </a>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Logo and Description Section */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src={Logo}
                  alt="OkTaxis"
      
                  className="w-40 h-auto"
                />
                
              </div>
              <p className="text-gray-500 mb-8 leading-relaxed">{footer.description}</p>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-950 mb-4">Social Links</h3>
                <div className="flex gap-4">
                  {footer.socialLinks.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-gray-800 hover:text-700 transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-3 lg:ml-8">
              <h3 className="text-xl font-semibold text-gray-950 mb-4">Quick Links</h3>
              <nav>
                <ul className="space-y-2">
                  {footer.quickLinks.map(({ href, label }) => (
                    <li key={label}>
                      <Link href={href} className="text-gray-950 hover:text-gray-800 transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-semibold text-gray-950 mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-800 mt-1" />
                  <p className="text-gray-950">{footer.contact.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-800" />
                  <Link
                    href={`tel:${footer.contact.phone}`}
                    className="text-gray-950 hover:text-gray-700 transition-colors"
                  >
                    {footer.contact.phone}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-800" />
                  <Link
                    href={`mailto:${footer.contact.email}`}
                    className="text-gray-950 hover:text-gray-700 transition-colors"
                  >
                    {footer.contact.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
        <div className="w-full border-t flex flex-col items-center py-2 text-sm text-white bg-black">
          <p>Developed By: <span>The Dev Square</span></p>
          <p>
              © 2024 Oktaxis. All Rights Reserved.
          </p>

        </div>
    </>
  );
}
