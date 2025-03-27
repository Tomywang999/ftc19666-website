import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sponsors | Forever Knight Robotics',
  description: 'Support our robotics program and help build the future of STEM education',
}

const currentSponsors = [
  {
    tier: 'Diamond',
    logos: [
      // { src: '/sponsors/vanke-bilingual.png', alt: 'Vanke Bilingual School', width: 300, height: 120 },
      // { src: '/sponsors/vanke-pudong.png', alt: 'Vanke School Pudong', width: 300, height: 120 },
      { src: '/sponsors/ivymaker.png', alt: 'Ivymaker', width: 300, height: 120 },
      { src: '/sponsors/dtd.png', alt: 'DTD Technology', width: 300, height: 120 },
      { src: '/sponsors/garmin.jpg', alt: 'Garmin', width: 300, height: 120 },
      { src: '/sponsors/deepseek.jpg', alt: 'Deepseek', width: 300, height: 120 },
      { src: '/sponsors/netease.png', alt: 'Netease' , width: 300, height: 120 },
      { src: '/sponsors/haibbidhi.png', alt: 'Haibbidhi' , width: 300, height: 120 },
      { src: '/sponsors/beats.png', alt: 'Beats by Apple', width: 300, height: 120 },
    ]
  },
  {
    tier: 'Platinum',
    logos: [
      { src: '/sponsors/codeislands.png', alt: 'Codeislands', width: 300, height: 120 },
      { src: '/sponsors/huafu.png', alt: 'Huafu', width: 300, height: 120 },
    ]
  },
  {
    tier: 'Gold',
    logos: [
      { src: '/sponsors/deyinkeji.png', alt: 'Deyin Technology', width: 300, height: 120 },
      { src: '/sponsors/jiayingdian.png', alt: 'Jia Ying Dian', width: 300, height: 120 },
      { src: '/sponsors/zinzendorf.png', alt: 'Zinzendorf' , width: 300, height: 120 },
      { src: '/sponsors/esternalasia.png', alt: 'Esternal Asia' , width: 300, height: 120 },
      { src: '/sponsors/easmt.png', alt: 'Easmta' , width: 300, height: 120 },
      { src: '/sponsors/9vu.png', alt: '9vu' , width: 300, height: 120 },
      { src: '/sponsors/meta48.png', alt: 'Meta48' , width: 300, height: 120 },
    ]
  }
]

const sponsorshipTiers = [
  {
    name: 'Diamond',
    amount: '25,000+',
    color: 'bg-gradient-to-r from-blue-400 to-purple-500',
    benefits: [
      'Prominent logo placement on robot',
      'Featured on team uniforms',
      'VIP access to all competitions',
      'Dedicated social media features',
      'Priority placement on website',
      'Exclusive team demonstration events'
    ]
  },
  {
    name: 'Platinum',
    amount: '15,000+',
    color: 'bg-gradient-to-r from-slate-300 to-slate-500',
    benefits: [
      'Large logo on robot',
      'Website recognition',
      'Social media mentions',
      'Team demonstration event',
      'Competition day recognition'
    ]
  },
  {
    name: 'Gold',
    amount: '10,000+',
    color: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    benefits: [
      'Medium logo on robot',
      'Website recognition',
      'Social media mention',
      'Competition day recognition'
    ]
  // },
  // {
  //   name: 'Silver',
  //   amount: '5,000+',
  //   color: 'bg-gradient-to-r from-gray-300 to-gray-400',
  //   benefits: [
  //     'Small logo on robot',
  //     'Website recognition',
  //     'Social media mention'
  //   ]
  // },
  // {
  //   name: 'Bronze',
  //   amount: '1,000+',
  //   color: 'bg-gradient-to-r from-amber-600 to-amber-800',
  //   benefits: [
  //     'Website recognition',
  //     'Team thank you letter'
  //   ]
  }
]

export default function SponsorsPage() {
  return (
    <>
      <PageHeader 
        title="Sponsors" 
        description="Partner with us to support STEM education and innovation"
      />
      
      {/* Current Sponsors Section - Updated styling */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">Our Current Sponsors</h2>
        <div className="space-y-24"> {/* Increased spacing between tiers */}
          {currentSponsors.map((tier, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-2xl font-semibold text-center">
                <span className="inline-block pb-2 border-b-2 border-[#1B3159]">
                  {tier.tier} Partners
                </span>
              </h3>
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
                {tier.logos.map((logo, logoIndex) => (
                  <div 
                    key={logoIndex} 
                    className="relative group w-full max-w-[300px] aspect-[3/2]"
                  >
                    <div className="absolute inset-0 bg-gray-100 rounded-lg -z-10 
                                  transform group-hover:scale-105 transition-transform duration-300"/>
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain w-auto h-auto max-w-[85%] max-h-[85%]"
                        style={{
                          objectFit: 'contain',
                          width: 'auto',
                          height: 'auto'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"/>
      </div>

      {/* Sponsorship Tiers Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Sponsorship Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sponsorshipTiers.map((tier, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden 
                         hover:transform hover:scale-105 transition-all duration-300
                         border border-gray-100 flex flex-col"
              >
                <div className={`${tier.color} text-white p-8 text-center`}>
                  <h3 className="text-2xl font-bold mb-3">{tier.name}</h3>
                  <p className="text-2xl font-light">¥{tier.amount}</p>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-gray-600">
                        <span className="text-green-500 text-lg">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  {/* <button className="w-full bg-[#1B3159] text-white px-6 py-4 rounded-lg
                                   inline-flex items-center justify-center gap-2 
                                   hover:bg-[#2B4F81] transition-colors
                                   font-semibold text-lg">
                    Become a Sponsor <ArrowRight className="h-5 w-5" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Updated styling */}
      {/* <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Interested in Supporting Our Team?</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
          We welcome the opportunity to discuss how your organization can partner with Team 19666
          and make a lasting impact on STEM education.
        </p>
        <button className="bg-[#800020] text-white px-10 py-4 rounded-lg 
                         inline-flex items-center gap-3 hover:bg-[#600018] 
                         transition-colors text-lg font-semibold">
          Contact Us <ArrowRight className="h-6 w-6" />
        </button>
      </section> */}
    </>
  )
} 