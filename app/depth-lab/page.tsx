import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Depth Lab | Robotics Program Community',
  description: 'Advanced robotics research in depth sensing and computer vision',
}

export default function DepthLabPage() {
  return (
    <>
      <PageHeader 
        title="Depth Lab" 
        description="Pushing the boundaries of robotics with advanced sensing technologies"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Research Focus</h2>
            <p className="text-gray-600 mb-6">
              Our Depth Lab program focuses on developing cutting-edge solutions in:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>3D Computer Vision</li>
              <li>Depth Sensing Technologies</li>
              <li>Machine Learning Applications</li>
              <li>Autonomous Navigation</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#2B4F81] pl-4">
              <h3 className="text-xl font-semibold mb-2">Current Projects</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Object Detection and Tracking</li>
                <li>3D Mapping and Localization</li>
                <li>Sensor Fusion Systems</li>
                <li>Real-time Processing Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 