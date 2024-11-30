"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface HeroProps {
  images: string[]
}

export function Hero({ images }: HeroProps) {
  const [currentImage, setCurrentImage] = useState<string>(images[0])

  useEffect(() => {
    // Initial random image
    const randomIndex = Math.floor(Math.random() * images.length)
    setCurrentImage(images[randomIndex])

    // Set up interval to change image every 2 seconds
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage)
        const nextIndex = (currentIndex + 1) % images.length
        return images[nextIndex]
      })
    }, 2000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="relative h-screen w-full mt-16 overflow-hidden">
      <Image
        src={currentImage}
        alt="Hero Image"
        fill
        className="object-cover brightness-[0.65] scale-105 transform"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-[1400px] px-6">
          <div className="space-y-4">
            <h1 className="relative">
              <span className="block text-3xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Forever Knight<br />
                Engineering Excellence<br />
                Together We Are
              </span>
              <span className="block text-4xl md:text-6xl lg:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
                FIRST.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
} 