'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'

import Logo from "@/assets/logo.png"

import { navLinks } from '@/constants/headerFooterData'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image
              src={Logo}
              alt='Okataxis'
              className='w-40'
            />
          </Link>
        </div>
        
        {/* Desktop Menus */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.id} 
              href={link.path} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${pathname === link.path
                  ? 'bg-black text-white' 
                  : 'text-gray-900 hover:bg-gray-700 hover:text-white'}`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        
        {/* Call Us Button */}
        <div className="hidden md:block">
        
        <a href="tel:07788710290">
          <Button 
            variant="outline" 
            className="flex py-4 items-center bg-black text-white hover:text-white hover:bg-gray-700"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Us
          </Button>
        </a>

       
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.id} 
                  href={link.path} 
                  className={`block px-4 py-2 rounded-md text-lg font-medium transition-colors
                    ${pathname === link.path
                      ? 'bg-gray-200 text-gray-900' 
                      : 'text-gray-600 hover:bg-black hover:text-white'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Button variant="outline" className="flex items-center justify-center w-full mt-4">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
