import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export async function getHeroImages() {
  try {
    const heroImagesDir = join(process.cwd(), 'public/hero-img')
    const files = readdirSync(heroImagesDir)
    
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/hero-img/${file}`)
  } catch (error) {
    console.error('Error reading hero images:', error)
    return []
  }
} 