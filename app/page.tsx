import { Hero } from '@/components/features/Hero'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getHeroImages } from '@/lib/getHeroImages'
import { SpeedInsights } from "@vercel/speed-insights/next"
export default async function Home() {
  const images = await getHeroImages()
  return (
    <>
      <Hero images={images} />
      
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
          {/* Programs Description Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-8">Our Programs</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-[#800020] pl-6 py-2 transition-all hover:pl-8">
                <h3 className="text-2xl font-semibold mb-3">FIRST Tech Challenge (FTC)</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Team 19666 Forever Knight competes in FIRST Tech Challenge, a robotics program 
                  where we design, build, and program competition robots while developing 
                  leadership and engineering skills.
                </p>
              </div>
              <div className="border-l-4 border-[#2B4F81] pl-6 py-2 transition-all hover:pl-8">
                <h3 className="text-2xl font-semibold mb-3">Depth Lab</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded by Team 19666, Depth Lab is an online community platform where FTC teams 
                  collaborate, share resources, and contribute to open-source robotics projects 
                  together.
                </p>
              </div>
            </div>
          </div>

          {/* Logos Side */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-8">
              {/* FTC Logo */}
              <div className="aspect-square relative group">
                <div className="absolute inset-0 bg-black/5 rounded-2xl 
                  transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/logo/FTC 19666 Logo.svg"
                    alt="FTC 19666 Forever Knight Logo"
                    fill
                    className="object-contain p-6"
                    priority
                  />
                </div>
              </div>
              
              {/* Depth Lab Logo */}
              <div className="aspect-square relative group">
                <div className="absolute inset-0 bg-black/5 rounded-2xl 
                  transform group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/logo/Depth Lab Logo.svg"
                    alt="Depth Lab Robotics Logo"
                    fill
                    className="object-contain p-6"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#1B3159] text-white py-16">
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
      </section> */}
    </>
  )
}
