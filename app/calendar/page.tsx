import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Calendar | Robotics Program Community',
  description: 'Upcoming events, competitions, and important dates',
}

export default function CalendarPage() {
  return (
    <>
      <PageHeader 
        title="Calendar" 
        description="Stay up to date with our events and activities"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          {/* Calendar implementation */}
          <div className="grid gap-4">
            {/* Event items */}
          </div>
        </div>
      </section>
    </>
  )
} 