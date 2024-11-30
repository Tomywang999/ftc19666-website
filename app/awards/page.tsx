import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Awards & Achievements | Robotics Program Community',
  description: 'Our team\'s recognition and accomplishments',
}

export default function AwardsPage() {
  return (
    <>
      <PageHeader 
        title="Awards & Achievements" 
        description="Celebrating our team's success and recognition"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Awards timeline or grid */}
        </div>
      </section>
    </>
  )
} 