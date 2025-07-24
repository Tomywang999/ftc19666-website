import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Forever Knight Robotics',
  description: 'Learn about our mission, history, and the team behind our robotics program',
}

export default function AboutUsPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Pioneering the future of robotics education since 2020"
      />
      
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4B6BFB] to-[#8C46FF] bg-clip-text text-transparent">
              Team Introduction
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are Team 19666 Forever Knight from Shanghai Vanke Bilingual School. As our team name suggests, 
              we embody the eternal spirit of knighthood — seeking timeless team spirit through endless evolution, 
              combining ambition with community collaboration — perfectly aligning with FIRST's principle of 
              Gracious Professionalism.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our first competition in 2019, we&apos;ve grown tremendously over these 4 years. In the 2023-24 season, 
              we secured second place at the Chongqing Qualifier, advancing to nationals. At CENTRAL STAGE, we achieved 
              our greatest milestone yet: becoming National Champions. Throughout this journey, our team has consistently 
              pushed boundaries and moved forward with unwavering determination.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-[#4B6BFB] mb-2">4+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-[#8C46FF] mb-2">#1</h3>
                <p className="text-gray-600">National Champions</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/team-about.jpg"
              alt="Forever Knight Team Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#1B3159] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Pushing boundaries and embracing creative solutions in robotics',
                icon: '🚀'
              },
              {
                title: 'Collaboration',
                description: 'Working together to achieve excellence in everything we do',
                icon: '🤝'
              },
              {
                title: 'Impact',
                description: 'Making a difference in our community through STEM education',
                icon: '💫'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="space-y-8">
          {[
            {
              year: '2020-21 Season',
              title: 'Freight Frenzy',
              description: `
              • Motivate Award 2nd Place at CN Qualifier
              • Judges\' Choice Award 2nd Place at CN Qualifier 2`
            },
            {
              year: '2021-22 Season',
              title: 'Power Play',
              description: `
              • Control Award 2nd Place at The CaoLu Cup Teenage Robot Design and Build Invitational Tournament
              • Motivate Award 3rd Place at Dianjian Peony Cup`
            },
            {
              year: '2022-23 Season',
              title: 'Centerstage',
              description: `
              • Inspire Award 3rd Place, Winning Alliance Captain at World Robot Contest Championships 2024 -Beijing FTC Program China Offseason Event
              • Inspire Award Winner at China FTC Guangzhou Offseason Event
              • Winning Alliance 1st Pick, Control Award 2nd Place at CN The CaoLu Cup Teenage Robot Design and Build Invitational Tournament
              • Winning Alliance 1st Pick at China FTC Championship presented by Qiao Feng
              • Finalist Alliance 1st Pick, Control Award 2nd Place Match Score at CN China FTC Chongqing Qualifier`
            },
            {
              year: '2024-25 Season',
              title: 'Into The Deep',
              description: `
              • Inspire Award Winner at China FTC Chenzhou Qualifier
              • Winning Alliance Captain at China FTC Hangzhou Qualifier
              • Control Award Winner at China FTC Shanghai #2 Qualifier
              • Inspire Award Winner at China FTC Championship presented by Qiao Feng
              • Inspire Award 2nd Place, Winning Alliance Captain at The CaoLu Cup Teenage Robot Design and Build Invitational Tournament
              • Inspire Award Winner, Winning Alliance 1st Pick at 2025 World Robot Contest Championships 2025 - Sanya FTC program & China Off-Season Event`
            },
          ].map((event, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="bg-gradient-to-r from-[#4B6BFB] to-[#8C46FF] p-4 rounded-xl text-white font-bold whitespace-nowrap">
                {event.year}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
} 
