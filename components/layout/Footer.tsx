import Link from 'next/link'
import { Instagram, Github, DiscIcon, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-2">© 2020-{new Date().getFullYear()} Forever Knight (Team 19666)</p>
        
        <div className="space-y-2">
          <p>Huangpu, Shanghai 153 Jumen Road (Qianyu Creative Park)</p>
          <p>Email: info@ftc19666.org</p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <Link 
            href="https://www.instagram.com/ftc19666/" 
            className="hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <span className="text-gray-500">|</span>
          <Link 
            href="https://x.com/ftc19666" 
            className="hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X (Twitter)"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          {/* <span className="text-gray-500">|</span>
          <Link 
            href="https://youtube.com" 
            className="hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subscribe to our YouTube channel"
          >
            <Youtube className="h-6 w-6" />
          </Link>
          <span className="text-gray-500">|</span>
          <Link 
            href="https://discord.com" 
            className="hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Discord server"
          >
            <DiscIcon className="h-6 w-6" />
          </Link>
          <span className="text-gray-500">|</span>
          <Link 
            href="https://github.com" 
            className="hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View our GitHub repositories"
          >
            <Github className="h-6 w-6" />
          </Link> */}
        </div>
      </div>
    </footer>
  )
}