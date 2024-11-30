interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-[#1B3159] text-white py-16 pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg opacity-90">{description}</p>}
      </div>
    </div>
  )
} 