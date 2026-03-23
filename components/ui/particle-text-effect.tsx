"use client"

import { useEffect, useRef } from "react"

interface Vector2D {
  x: number
  y: number
}

interface ParticleTextEffectProps {
  words?: string[]
  width?: number
  height?: number
}

class Particle {
  position: Vector2D
  velocity: Vector2D
  acceleration: Vector2D
  target: Vector2D
  color: string
  size: number
  maxSpeed: number
  maxForce: number
  isReturning: boolean
  trail: Vector2D[]
  trailLength: number

  constructor(x: number, y: number, color: string) {
    this.position = { x, y }
    this.velocity = { x: 0, y: 0 }
    this.acceleration = { x: 0, y: 0 }
    this.target = { x, y }
    this.color = color
    this.size = Math.random() * 2 + 1
    this.maxSpeed = 10
    this.maxForce = 1
    this.isReturning = false
    this.trail = []
    this.trailLength = 5
  }

  applyForce(force: Vector2D) {
    this.acceleration.x += force.x
    this.acceleration.y += force.y
  }

  arrive(target: Vector2D) {
    const desired = {
      x: target.x - this.position.x,
      y: target.y - this.position.y,
    }
    const d = Math.sqrt(desired.x * desired.x + desired.y * desired.y)
    let speed = this.maxSpeed
    if (d < 100) {
      speed = (d / 100) * this.maxSpeed
    }
    if (d > 0) {
      desired.x = (desired.x / d) * speed
      desired.y = (desired.y / d) * speed
    }
    const steer = {
      x: desired.x - this.velocity.x,
      y: desired.y - this.velocity.y,
    }
    const steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
    if (steerMag > this.maxForce) {
      steer.x = (steer.x / steerMag) * this.maxForce
      steer.y = (steer.y / steerMag) * this.maxForce
    }
    this.applyForce(steer)
  }

  flee(target: Vector2D) {
    const desired = {
      x: this.position.x - target.x,
      y: this.position.y - target.y,
    }
    const d = Math.sqrt(desired.x * desired.x + desired.y * desired.y)
    if (d < 100) {
      if (d > 0) {
        desired.x = (desired.x / d) * this.maxSpeed
        desired.y = (desired.y / d) * this.maxSpeed
      }
      const steer = {
        x: desired.x - this.velocity.x,
        y: desired.y - this.velocity.y,
      }
      const steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
      if (steerMag > this.maxForce) {
        steer.x = (steer.x / steerMag) * this.maxForce
        steer.y = (steer.y / steerMag) * this.maxForce
      }
      this.applyForce(steer)
    }
  }

  update() {
    this.trail.push({ x: this.position.x, y: this.position.y })
    if (this.trail.length > this.trailLength) {
      this.trail.shift()
    }

    this.velocity.x += this.acceleration.x
    this.velocity.y += this.acceleration.y
    const speed = Math.sqrt(
      this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y
    )
    if (speed > this.maxSpeed) {
      this.velocity.x = (this.velocity.x / speed) * this.maxSpeed
      this.velocity.y = (this.velocity.y / speed) * this.maxSpeed
    }
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.acceleration = { x: 0, y: 0 }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw trail
    for (let i = 0; i < this.trail.length; i++) {
      const alpha = i / this.trail.length
      ctx.beginPath()
      ctx.arc(
        this.trail[i].x,
        this.trail[i].y,
        this.size * alpha,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = this.color.replace(")", `, ${alpha * 0.5})`)
      ctx.fill()
    }

    // Draw particle
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

export function ParticleTextEffect({
  words = ["HHAI", "AI-Powered", "Health Revolution", "Your Health. Smarter.", "HyperHealth AI"],
  width = 1000,
  height = 500,
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef<Vector2D>({ x: 0, y: 0 })
  const isMouseDownRef = useRef(false)
  const frameCountRef = useRef(0)
  const currentWordIndexRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    const createParticlesFromText = (text: string) => {
      const particles: Particle[] = []
      ctx.clearRect(0, 0, width, height)
      
      // Dynamic font size based on text length
      let fontSize = 120
      if (text.length > 15) fontSize = 80
      if (text.length > 20) fontSize = 60
      
      ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(text, width / 2, height / 2)

      const imageData = ctx.getImageData(0, 0, width * dpr, height * dpr)
      const data = imageData.data

      const gap = 4
      for (let y = 0; y < height * dpr; y += gap) {
        for (let x = 0; x < width * dpr; x += gap) {
          const index = (y * width * dpr + x) * 4
          const alpha = data[index + 3]
          if (alpha > 128) {
            // HHAI brand colors: purples, cyans, blues
            const r = Math.random() * 100 + 100  // 100-200
            const g = Math.random() * 80 + 80    // 80-160
            const b = Math.random() * 155 + 100  // 100-255
            const color = `rgba(${r}, ${g}, ${b}`
            particles.push(new Particle(x / dpr, y / dpr, color))
          }
        }
      }

      return particles
    }

    const initParticles = () => {
      const word = words[currentWordIndexRef.current]
      particlesRef.current = createParticlesFromText(word)
    }

    const transitionToNextWord = () => {
      currentWordIndexRef.current =
        (currentWordIndexRef.current + 1) % words.length
      const word = words[currentWordIndexRef.current]
      const newParticles = createParticlesFromText(word)

      // Match particles or create/remove as needed
      const maxLength = Math.max(
        particlesRef.current.length,
        newParticles.length
      )
      const updatedParticles: Particle[] = []

      for (let i = 0; i < maxLength; i++) {
        if (i < particlesRef.current.length && i < newParticles.length) {
          // Update target for existing particle
          particlesRef.current[i].target = newParticles[i].target
          particlesRef.current[i].color = newParticles[i].color
          updatedParticles.push(particlesRef.current[i])
        } else if (i < newParticles.length) {
          // Create new particle at random position
          const p = newParticles[i]
          p.position = {
            x: Math.random() * width,
            y: Math.random() * height,
          }
          updatedParticles.push(p)
        }
        // Extra particles from previous word are discarded
      }

      particlesRef.current = updatedParticles
    }

    initParticles()

    const animate = () => {
      ctx.fillStyle = "rgba(10, 14, 23, 0.15)" // Motion blur effect
      ctx.fillRect(0, 0, width, height)

      frameCountRef.current++
      if (frameCountRef.current % 180 === 0) {
        // Change word every 3 seconds (180 frames at 60fps)
        transitionToNextWord()
      }

      for (const particle of particlesRef.current) {
        if (isMouseDownRef.current) {
          particle.flee(mouseRef.current)
        }
        particle.arrive(particle.target)
        particle.update()
        particle.draw(ctx)
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        // Right click
        isMouseDownRef.current = true
      }
    }

    const handleMouseUp = () => {
      isMouseDownRef.current = false
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("contextmenu", handleContextMenu)

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [words, width, height])

  return (
    <div className="flex flex-col items-center justify-center w-full bg-transparent py-8">
      <canvas
        ref={canvasRef}
        style={{
          width: width,
          height: height,
          maxWidth: "100%",
          height: "auto",
        }}
        className="cursor-crosshair"
      />
    </div>
  )
}
