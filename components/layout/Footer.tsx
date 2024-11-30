import Link from 'next/link'
import { Instagram, Youtube, Github, DiscIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-2">© 2018-{new Date().getFullYear()} Forever Knight Robotics Program (Team 19666)</p>
        
        <div className="space-y-2">
          <p>Main Campus: 123 Innovation Drive, Example City, ST 12345</p>
          <p>Email: team19666@example.org</p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <Link 
            href="https://instagram.com" 
            className="hover:text-gray-300 transition-colors"
            target="_blank"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <span>|</span>
          <Link 
            href="https://youtube.com" 
            className="hover:text-gray-300 transition-colors"
            target="_blank"
          >
            <Youtube className="h-6 w-6" />
          </Link>
          <span>|</span>
          <Link 
            href="https://discord.com" 
            className="hover:text-gray-300 transition-colors"
            target="_blank"
          >
            <DiscIcon className="h-6 w-6" />
          </Link>
          <span>|</span>
          <Link 
            href="https://github.com" 
            className="hover:text-gray-300 transition-colors"
            target="_blank"
          >
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
} 