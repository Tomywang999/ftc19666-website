import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

type TeamMemberSocial = {
  email?: string;
  github?: string;
  linkedin?: string;
}

export const metadata: Metadata = {
  title: 'Our Team | Forever Knight Robotics',
  description: 'Meet the dedicated members behind Team 19666 Forever Knight',
}

const teamCategories = [
  {
    name: "Leadership",
    members: [
      {
        name: "Alex Chen",
        role: "Team Captain",
        image: "/team/alex.jpg",
        grade: "Grade 11",
        specialties: ["Strategy", "Project Management"],
        bio: "Leading the team since 2022, focused on building a collaborative team culture.",
        social: {
          email: "alex@example.com",
          github: "https://github.com/alex",
        } as TeamMemberSocial,
      },
      {
        name: "Sarah Zhang",
        role: "Engineering Lead",
        image: "/team/sarah.jpg",
        grade: "Grade 12",
        specialties: ["Mechanical Design", "CAD"],
        bio: "Passionate about innovative mechanical solutions and mentoring new team members.",
        social: {
          email: "sarah@example.com",
          github: "https://github.com/sarah",
        } as TeamMemberSocial,
      },
    ]
  },
  {
    name: "Engineering",
    members: [
      {
        name: "David Li",
        role: "Software Developer",
        image: "/team/david.jpg",
        grade: "Grade 11",
        specialties: ["Computer Vision", "Autonomous"],
        bio: "Specializes in computer vision and autonomous navigation systems.",
        social: {
          github: "https://github.com/david",
        } as TeamMemberSocial,
      },
      {
        name: "Emily Wang",
        role: "Mechanical Engineer",
        image: "/team/emily.jpg",
        grade: "Grade 10",
        specialties: ["3D Printing", "Prototyping"],
        bio: "Focuses on rapid prototyping and mechanical optimization.",
        social: {
          email: "emily@example.com",
        } as TeamMemberSocial,
      },
    ]
  },
  {
    name: "Outreach",
    members: [
      {
        name: "Michael Wu",
        role: "Outreach Coordinator",
        image: "/team/michael.jpg",
        grade: "Grade 11",
        specialties: ["Event Planning", "Community Relations"],
        bio: "Coordinates community events and manages team social media presence.",
        social: {
          email: "michael@example.com",
          linkedin: "https://linkedin.com/in/michael",
        } as TeamMemberSocial,
      },
    ]
  }
]

export default function TeamPage() {
  return (
    <>
      <PageHeader 
        title="Meet Our Team" 
        description="The passionate individuals driving innovation at Forever Knight"
      />

      {/* Team Overview */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#4B6BFB] to-[#8C46FF] bg-clip-text text-transparent">
              Building Success Together
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team comprises dedicated students passionate about robotics, engineering, 
              and community impact. Each member brings unique skills and perspectives, 
              contributing to our collective success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#4B6BFB]/10 to-[#4B6BFB]/5 p-8 rounded-2xl">
              <h3 className="text-5xl font-bold text-[#4B6BFB] mb-3">15</h3>
              <p className="text-lg text-gray-700 font-medium">Active Members</p>
            </div>
            <div className="bg-gradient-to-br from-[#8C46FF]/10 to-[#8C46FF]/5 p-8 rounded-2xl">
              <h3 className="text-5xl font-bold text-[#8C46FF] mb-3">4</h3>
              <p className="text-lg text-gray-700 font-medium">Subteams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members by Category */}
      {teamCategories.map((category, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">{category.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.members.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-72 group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-lg text-white/90 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600 flex-wrap">
                      <span className="inline-flex bg-[#1B3159]/10 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                        {member.grade}
                      </span>
                      {member.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="inline-flex bg-[#800020]/10 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{member.bio}</p>
                    <div className="flex items-center gap-4 pt-2">
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} 
                           className="text-gray-600 hover:text-[#4B6BFB] transition-colors p-2 hover:bg-[#4B6BFB]/10 rounded-full">
                          <Mail className="h-6 w-6" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-600 hover:text-[#4B6BFB] transition-colors p-2 hover:bg-[#4B6BFB]/10 rounded-full">
                          <Github className="h-6 w-6" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-600 hover:text-[#4B6BFB] transition-colors p-2 hover:bg-[#4B6BFB]/10 rounded-full">
                          <Linkedin className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
} 