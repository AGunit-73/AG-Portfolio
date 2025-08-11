import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'

const IMAGE_DIR = path.join(process.cwd(), 'public', 'images')
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF', '.SVG'])

export async function GET() {
  try {
    const files = fs.existsSync(IMAGE_DIR) ? fs.readdirSync(IMAGE_DIR) : []
    const images = files
      .filter((f) => ALLOWED.has(path.extname(f)))
      .map((f) => `/images/${f}`)
    return NextResponse.json({ images })
  } catch (err) {
    return NextResponse.json({ images: [], error: 'READ_ERROR' }, { status: 500 })
  }
}
