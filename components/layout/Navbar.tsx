'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'FRC', href: '/frc' },
  { label: 'FTC', href: '/ftc' },
  { label: 'FLL', href: '/fll' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Outreach', href: '/outreach' },
  { label: 'Awards', href: '/awards' },
  { label: 'Shop', href: '/shop' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#1B3159] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              Robotics Program
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button className="p-2 hover:bg-[#2B4F81] rounded-full">
              <Search className="h-5 w-5" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-[#2B4F81] rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 hover:bg-[#2B4F81] rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 