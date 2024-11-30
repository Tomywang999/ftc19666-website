import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'About Us | Robotics Program Community',
  description: 'Learn about our mission, history, and the team behind our robotics program',
}

export default function AboutUsPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Building tomorrow's innovators through robotics education and competition"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We are dedicated to inspiring young minds through robotics education,
              fostering innovation, and building the next generation of STEM leaders.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600">
              Founded in [year], our program has grown from a single team to a comprehensive
              robotics education platform serving students across multiple age groups and skill levels.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#1B3159] pl-4">
              <h3 className="text-xl font-semibold mb-2">Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Innovation and Creativity</li>
                <li>Teamwork and Collaboration</li>
                <li>STEM Education Excellence</li>
                <li>Community Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 