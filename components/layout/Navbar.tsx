'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Search as SearchComponent } from '@/components/features/Search'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Team', href: '/team' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'FTC', href: '/ftc' },
  { label: 'Depth Lab', href: '/depth-lab' },
  // { label: 'Outreach', href: '/outreach' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-[#1B3159]/95 backdrop-blur-md shadow-lg" 
        : "bg-[#1B3159]"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="font-black text-2xl text-white hover:text-gray-200 transition-colors"
            >
              <span className="bg-gradient-to-r from-[#4B6BFB] to-[#8C46FF] bg-clip-text text-transparent">19666</span> Forever Knight
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <SearchComponent />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute w-full transition-all duration-300 ease-in-out",
        isOpen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="bg-[#1B3159]/95 backdrop-blur-md px-4 pt-2 pb-3 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 