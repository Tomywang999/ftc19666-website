import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative h-[60vh] w-full mt-16">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Robotics Team"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Inspiring Future Engineers
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Building robots, developing skills, and creating tomorrow's innovators through FIRST Robotics
          </p>
          <button className="bg-[#800020] hover:bg-[#600018] text-white px-8 py-3 rounded-full text-lg transition-colors">
            Join Our Program
          </button>
        </div>
      </div>
    </div>
  )
} 