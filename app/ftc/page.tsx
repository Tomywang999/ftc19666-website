import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'
import Image from 'next/image'
import { ArrowRight, Award, Bot, Wrench, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FTC Program | Forever Knight Robotics',
  description: 'Our FIRST Tech Challenge journey and achievements',
}

const robots = [
  {
    season: '2024-2025',
    name: 'INTO THE DEEP',
    image: '/robots/2025-robot.png',
    achievements: [
      'National Inspire Award Winner',
      'Regional Championship Winner',
      'Control Award Winner'
    ],
    features: [
      'Automations Sample Grabing',
      'Dynamic Scoring Mechanism',
      'Real-time Data Analytics'
    ]
  },
  {
    season: '2023-2024',
    name: 'CENTERSTAGE',
    image: '/robots/2024-robot.png',
    achievements: [
      'National Championship Winner',
      'Chongqing Regional Finalist',
      'Design Award Winner'
    ],
    features: [
      'Advanced Vision Processing',
      'Precision Pixel Placement',
      'High-Speed Drone Launch'
    ]
  },
  {
    season: '2022-2023',
    name: 'POWERPLAY',
    image: '/robots/2023-robot.png',
    achievements: [
      'Regional Semi-finalist',
      'Think Award Winner',
      'Innovation Award'
    ],
    features: [
      'Multi-level Cone Stacking',
      'Autonomous Terminal Scoring',
      'Custom Signal Sleeve Detection'
    ]
  },
  {
    season: '2021-2022',
    name: 'FREIGHT FRENZY',
    image: '/robots/2022-robot.png',
    achievements: [
      'Division Finalist',
      'Control Award Winner'
    ],
    features: [
      'Dual Intake System',
      'Shared Hub Automation',
      'Team Shipping Element Design'
    ]
  },
  {
    season: '2020-2021',
    name: 'ULTIMATE GOAL',
    image: '/robots/2021-robot.png',
    achievements: [
      'Regional Finalist',
      'Think Award'
    ],
    features: [
      'High Goal Shooter',
      'Wobble Goal Manipulator',
      'Ring Detection System'
    ]
  }
]

const stats = [
  { icon: Trophy, value: '15+', label: 'Awards Won' },
  { icon: Bot, value: '4', label: 'Robots Built' },
  { icon: Wrench, value: '1000+', label: 'Build Hours' },
  { icon: Award, value: '#1', label: 'National Ranking' }
]

export default function FTCPage() {
  return (
    <>
      <PageHeader 
        title="FIRST Tech Challenge" 
        description="Pushing the boundaries of robotics innovation since 2020"
      />

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
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

      {/* Robots Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Robots Through the Seasons</h2>
          <div className="space-y-24">
            {robots.map((robot, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                {/* Robot Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-square rounded-2xl overflow-hidden group">
                    <Image
                      src={robot.image}
                      alt={`${robot.season} Robot - ${robot.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{robot.name}</h3>
                      <p className="text-white/80">{robot.season}</p>
                    </div>
                  </div>
                </div>

                {/* Robot Details */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {robot.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                          <span className="text-[#1B3159]">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Achievements</h3>
                    <ul className="space-y-2">
                      {robot.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-2 text-gray-600">
                          <Trophy className="h-5 w-5 text-[#800020]" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team combines innovative engineering with precise execution. 
            Every robot we build represents countless hours of design iteration, 
            testing, and refinement to achieve peak performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-[#1B3159] w-12 h-12 flex items-center justify-center rounded-lg mb-6">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Design & Manufacturing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• CAD-First Design Approach</li>
              <li>• Custom CNC Machining</li>
              <li>• 3D Printed Prototyping</li>
              <li>• Iterative Testing Process</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-[#1B3159] w-12 h-12 flex items-center justify-center rounded-lg mb-6">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Control Systems</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Advanced Path Planning</li>
              <li>• Computer Vision Systems</li>
              <li>• PID Control Loops</li>
              <li>• Custom Sensor Integration</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-[#1B3159] w-12 h-12 flex items-center justify-center rounded-lg mb-6">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation Focus</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Novel Mechanism Design</li>
              <li>• Efficient Game Strategies</li>
              <li>• Custom Tool Development</li>
              <li>• Performance Analytics</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
} 