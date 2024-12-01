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
        name: "Robin Sun",
        role: "Team Captain",
        image: "/team/robin.png",
        grade: "Grade 10",
        specialties: ["Strategy", "Project Management", "Programming", "Computer Vision", "Autonomous", "Outreach"],
        bio: "Robin is the current captain of Team 19666, specializing in programming. He is an accomplished pianist (Level 1) and has a keen interest in IT and technology. His hobbies include studying Tolkien's constructed languages and playing Paradox strategy games. He looks forward to growing and developing with FTC 19666.",
        social: {
          email: "robins@ftc19666.org",
          //github: "https://github.com/alex",
        } as TeamMemberSocial,
      },
      {
        name: "Eason Zhu",
        role: "Controller",
        image: "/team/eason.png",
        grade: "Grade 10",
        specialties: ["Controller", "Strategy", "Project Management", "Scouting"],
        bio: "Eason Zhu, 16 years old, serves as the team's operator and Project Manager. This season marks his 5th year in FTC, having started in 6th grade with the goal of learning beyond the classroom curriculum while making new friends. His passion for FTC grew over time, along with his pursuit of excellence. Last season, the team came incredibly close to advancing to the Houston World Championship. This year, he hopes to transform that near-miss into motivation, helping the team turn their previous challenges into this season's success story.",
        social: {
          email: "easonz@ftc19666.org",
        //   github: "https://github.com/sarah",
        } as TeamMemberSocial,
      },
    ]
  },
  {
    name: "Team Members",
    members: [
        {
            name: "Eric Wen",
            role: "Controller",
            image: "/team/eric.png",
            grade: "Grade 10",
            specialties: ["Controller", "Outreach", "Engineering", "Scouting"],
            bio: "Eric started participating in FTC five years ago and has accumulated extensive experience in the FTC learning environment. His passion for FTC has grown stronger over the years. This journey has witnessed his growth, honed his technical skills, and cultivated his deep interest in technological challenges. Eric has a wide range of hobbies, including engineering design, building, soccer, and swimming. His perseverance is reflected not only on the soccer field and in the swimming pool but also extends to every practical endeavor. As a devoted Liverpool fan, he incorporates the united spirit of 'You'll Never Walk Alone' into every moment of competition and training.",
            social: {
              email: "ericw@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Eason Wang",
            role: "Programming",
            image: "/team/easonw.png",
            grade: "Grade 9",
            specialties: ["Scouting", "Programming"],
            bio: "Eason Wang is a 9th grade student who handles engineering responsibilities for the team. His interests include programming, LEGO, soccer, and basketball. He looks forward to gaining more interpersonal experience and improving his abilities through this competition. Eason is willing to take on responsibilities and ensure the team has convenient access to needed resources, demonstrating his commitment to contributing to the team's success.",
            social: {
              email: "easonw@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Elvis Wu",
            role: "Engineering",
            image: "/team/placeholder.jpeg",
            grade: "Grade 11",
            specialties: ["Engineering", "Outreach"],
            bio: "Elvis Wu, 16 years old, serves as the team's engineering lead and manages the engineering documentation in the team's engineering notebook. He joined FTC to develop his capabilities and expertise in robotics engineering, learning through collaboration and growing through competition to achieve outstanding progress. His experience in robotics competitions enables him to effectively handle engineering matters and help guide the team to victory.",
            social: {
              email: "elvisw@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Tomy Wang",
            role: "Programming",
            image: "/team/placeholder.jpeg",
            grade: "Grade 11",
            specialties: ["Programming", "Autonomous", "Scouting", "Outreach", "Strategy", "Computer Vision"],
            bio: "Tomy Wang is an 11th grade student who serves as one of the team's lead programmers. With extensive experience in computer vision, autonomous programming, and strategy development, he plays a crucial role in enhancing the team's technical capabilities. His passion for robotics and programming drives him to continuously explore innovative solutions and mentor younger team members. Beyond his technical contributions, Tomy actively participates in outreach events and scouting activities, helping to strengthen both the team's competitive edge and community presence. His analytical mindset and dedication to excellence make him an invaluable member of Forever Knight.",
            social: {
              email: "tomyw@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Lucas Lu",
            role: "Programming",
            image: "/team/lucas.png",
            grade: "Grade 7",
            specialties: ["Programming", "Scouting"],
            bio: "Lucas Lu is a 7th grade student joining FTC for the first time this season. With prior experience in microcontrollers, programming, and VEX robotics, he brings valuable skills to the team. His strong foundation in mathematics and programming makes him well-suited for contributing to autonomous development and problem-solving. Lucas is eager to learn from his teammates and grow his robotics capabilities while supporting the team's engineering and programming efforts. As a new member, he approaches the competition with enthusiasm and dedication to team collaboration.",
            social: {
              email: "lucasl@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Zhiyu Luo",
            role: "Scouting",
            image: "/team/placeholder.jpeg",
            grade: "Grade #",
            specialties: ["Scouting"],
            bio: "----",
            social: {
               email: "zhiyuluol@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Haoran Fan",
            role: "Outreach",
            image: "/team/placeholder.jpeg",
            grade: "Grade #",
            specialties: ["Outreach", "Engineering"],
            bio: "----",
            social: {
               email: "haoranfanf@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Ziming Jiang",
            role: "Engineering",
            image: "/team/zimj.png",
            grade: "Grade #",
            specialties: ["Engineering", "Outreach", "Scouting"],
            bio: "Ziming Jiang is currently running for the position of mechanical engineer and engineering notebook coordinator in Team 19666. He has a strong passion for FTC and programming, which provides him with a comfortable space amid academic pressures. While helping the team, he develops his logical thinking abilities, enabling him to better explore the world and seek knowledge. This has also helped him become more organized in both studies and life. He is committed to giving his best effort to FTC programming. Known for his eagerness to learn, diligence in research, and dedication to improvement, Ziming hopes to contribute significantly to the team's success in competitions.",
            social: {
            email: "zimingjiangj@ftc19666.org",
            //   github: "https://github.com/sarah",
            } as TeamMemberSocial,
        },
        {
            name: "Jingwu Lu",
            role: "Outreach",
            image: "/team/jiwl.png",
            grade: "Grade #",
            specialties: ["Outreach", "Scouting"],
            bio: "Jingwu Lu is a member of Team 19666 who has been learning LEGO building and programming since the age of 5, giving him a solid foundation. He has maintained a strong interest and passion for LEGO, having participated in the FLL Asia Championship and other robotics programming competitions. In the team, he serves as both a mechanical engineer and outreach member. With nearly 7 years of building experience, he is confident in leveraging his mechanical construction expertise to contribute to the team's continued progress. He looks forward to growing alongside his teammates and achieving greater honors together.",
            social: {
               email: "jingwul@ftc19666.org",
            //   github: "https://github.com/sarah",
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