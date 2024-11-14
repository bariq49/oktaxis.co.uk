'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'

import { navLinks } from '@/constants/headerFooterData'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-primary">
            Oktaxis
          </Link>
        </div>
        
        {/* Desktop Menus */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              <Link 
                href={link.path} 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${pathname === link.path || (link.submenu && pathname.startsWith(link.path))
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-900 hover:bg-gray-950 hover:text-white'}`}
              >
                {link.title}
              </Link>
              {link.submenu && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  {link.submenu.map((subLink) => (
                    <Link 
                      key={subLink.id}    
                      href={subLink.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-800 hover:text-white"
                    >
                      {subLink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Call Us Button */}
        <div className="hidden md:block">
          <Button variant="outline" className="flex items-center bg-gray-950 text-white hover:text-white hover:bg-gray-900 ">
            <Phone className="mr-2 h-4 w-4" />
            Call Us
          </Button>
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
                <div key={link.id} className="relative">
                  {link.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button 
                          className={`flex items-center justify-between w-full px-4 py-2 rounded-md text-lg font-medium transition-colors
                            ${pathname.startsWith(link.path)
                              ? 'bg-gray-200 text-gray-900' 
                              : 'text-gray-600 hover:bg-gray-800 hover:text-white'}`}
                        >
                          {link.title}
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {link.submenu.map((subLink) => (
                          <DropdownMenuItem key={subLink.id} asChild>
                            <Link 
                              href={subLink.path}
                              className="w-full px-4 py-2 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {subLink.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link 
                      href={link.path} 
                      className={`block px-4 py-2 rounded-md text-lg font-medium transition-colors
                        ${pathname === link.path
                          ? 'bg-gray-200 text-gray-900' 
                          : 'text-gray-600 hover:bg-gray-800 hover:text-white'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
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