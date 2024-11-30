import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'FTC Program | Robotics Program Community',
  description: 'Our FIRST Tech Challenge program details and achievements',
}

export default function FTCPage() {
  return (
    <>
      <PageHeader 
        title="FIRST Tech Challenge" 
        description="Middle and high school students designing and building competitive robots"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Similar structure to FRC page */}
      </section>
    </>
  )
} 