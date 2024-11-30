import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'
import Image from 'next/image'
import { ArrowRight, Youtube, Share2, Users, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Depth Lab | Forever Knight Robotics',
  description: 'An online community platform for FTC teams to collaborate and share knowledge',
}

const featuredVideos = [
  {
    title: "Autonomous Navigation Guide",
    thumbnail: "/depth-lab/video-thumbnails/mathematical foundation.png",
    platform: "bilibili",
    url: "https://bilibili.com/your-video-url",
    views: "0.1K"
  }
]

export default function DepthLabPage() {
  return (
    <>
      <PageHeader 
        title="Depth Lab" 
        description="A community-driven platform for FTC teams to learn, share, and grow together"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4B6BFB] to-[#8C46FF] bg-clip-text text-transparent">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depth Lab is more than just a platform - it's a thriving community of FTC teams 
                sharing knowledge, resources, and experiences. Together, we're pushing the 
                boundaries of what's possible in robotics.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#1B3159] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#2B4F81] transition-colors">
                  Join Community <Users className="h-5 w-5" />
                </button>
                <button className="bg-[#800020] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#600018] transition-colors">
                  Share Your Project <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/depth-lab/community-hero.svg"
                alt="Depth Lab Community"
                fill
                className="object-contain"
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <a 
                key={index} 
                href={video.url}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-white text-sm">
                      {video.views} views
                    </div>
                  </div>
                  {video.platform === 'youtube' ? 
                    <Youtube className="absolute top-4 right-4 h-6 w-6 text-red-600" /> :
                    <Video className="absolute top-4 right-4 h-6 w-6 text-[#00A1D6]" />
                  }
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-[#4B6BFB] transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 