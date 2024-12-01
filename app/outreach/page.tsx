import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'
import Image from 'next/image'
import { Calendar, Users, Trophy, ArrowRight, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community Outreach | Forever Knight Robotics',
  description: 'Making a difference in our community through STEM education and mentorship',
}

const impactStats = [
  { icon: Users, value: '1,000+', label: 'Students Reached' },
  { icon: Calendar, value: '20+', label: 'Events Hosted' },
  { icon: Trophy, value: '5+', label: 'School Partners' }
]

const outreachEvents = [
  {
    title: "FTC Robotics Workshop",
    date: "December 2023",
    location: "Shanghai Science Museum",
    image: "/outreach/workshop.jpg",
    description: "Hosted a hands-on robotics workshop for middle school students, introducing them to FTC and basic robotics concepts.",
    impact: "150 students participated",
    category: "Workshop"
  },
  {
    title: "STEM Education Day",
    date: "November 2023",
    location: "Local Elementary Schools",
    image: "/outreach/stem-day.jpg",
    description: "Organized interactive STEM activities and robot demonstrations across multiple elementary schools.",
    impact: "300+ students engaged",
    category: "Education"
  },
  {
    title: "FTC Teams Mentoring Program",
    date: "Ongoing 2023-2024",
    location: "Various Schools",
    image: "/outreach/mentoring.jpg",
    description: "Providing ongoing mentorship to rookie FTC teams, sharing our experience and resources.",
    impact: "Supporting 3 new teams",
    category: "Mentorship"
  }
]

const upcomingEvents = [
  {
    title: "Spring Robotics Showcase",
    date: "March 2024",
    location: "Vanke Bilingual School",
    description: "Join us for an exciting showcase of robotics technology and student projects."
  },
  {
    title: "Community STEM Fair",
    date: "April 2024",
    location: "Shanghai Community Center",
    description: "Interactive demonstrations and hands-on activities for all ages."
  }
]

export default function OutreachPage() {
  return (
    <>
      <PageHeader 
        title="Community Outreach" 
        description="Inspiring the next generation of innovators through STEM education"
      />
      
      {/* Impact Stats */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B3159] text-white mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-[#1B3159] mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Outreach Events</h2>
          <div className="space-y-12">
            {outreachEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-4 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="bg-[#1B3159]/10 px-4 py-2 rounded-lg inline-block">
                    <span className="font-medium text-[#1B3159]">{event.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B3159] text-white p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <button className="text-[#1B3159] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="bg-[#1B3159] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a school, organization, or individual interested in robotics,
            we'd love to collaborate with you on future outreach events.
          </p>
          <button className="bg-white text-[#1B3159] px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Contact Us <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </>
  )
} 