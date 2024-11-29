import { Hero } from '@/components/features/Hero'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#1B3159] pl-4">
                <h3 className="text-xl font-semibold mb-2">FIRST Robotics Competition (FRC)</h3>
                <p className="text-gray-600">High school students build and compete with sophisticated robots in high-energy regional competitions.</p>
              </div>
              <div className="border-l-4 border-[#800020] pl-4">
                <h3 className="text-xl font-semibold mb-2">FIRST Tech Challenge (FTC)</h3>
                <p className="text-gray-600">Middle and high school students design, build, and program robots for head-to-head challenges.</p>
              </div>
              <div className="border-l-4 border-[#2B4F81] pl-4">
                <h3 className="text-xl font-semibold mb-2">FIRST LEGO League (FLL)</h3>
                <p className="text-gray-600">Elementary and middle school students solve real-world problems with LEGO-based robots.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px]">
            <Image
              src="https://picsum.photos/800/600"
              alt="Students working on robots"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B3159] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Become a Sponsor</h2>
              <p className="mb-8">Support the next generation of engineers and innovators. Your contribution makes a difference.</p>
              <button className="bg-white text-[#1B3159] px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Sponsor Our Program
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Community Outreach</h2>
              <p className="mb-8">Discover how we're making an impact in our community through STEM education and mentorship.</p>
              <button className="bg-[#800020] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#600018] transition-colors">
                View Our Projects
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
