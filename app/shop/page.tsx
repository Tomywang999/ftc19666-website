import { Metadata } from 'next'
import { PageHeader } from '@/app/_components/PageHeader'

export const metadata: Metadata = {
  title: 'Team Shop | Robotics Program Community',
  description: 'Support our team by purchasing merchandise',
}

export default function ShopPage() {
  return (
    <>
      <PageHeader 
        title="Team Shop" 
        description="Show your support with official team merchandise"
      />
      
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product grid */}
        </div>
      </section>
    </>
  )
} 