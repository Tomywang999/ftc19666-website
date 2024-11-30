import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sponsors | Robotics Program Community',
  description: 'Support our robotics program and help build the future of STEM education',
}

export default function SponsorsPage() {
  return (
    <>
      <PageHeader 
        title="Sponsors" 
        description="Partner with us to support STEM education and innovation"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Sponsorship Tiers */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Platinum Sponsor</h3>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Logo on robot</li>
              <li>Website recognition</li>
              <li>Event presence</li>
            </ul>
            <button className="bg-[#1B3159] text-white px-6 py-2 rounded-full inline-flex items-center gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          {/* Add more tiers... */}
        </div>
      </section>
    </>
  )
} 