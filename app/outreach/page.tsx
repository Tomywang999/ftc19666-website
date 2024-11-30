import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Community Outreach | Robotics Program Community',
  description: 'Our impact in the community through STEM education and mentorship',
}

export default function OutreachPage() {
  return (
    <>
      <PageHeader 
        title="Community Outreach" 
        description="Making a difference in our community through robotics"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Outreach programs and impact metrics */}
        </div>
      </section>
    </>
  )
} 