"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { src: "/images/buzo-8701.png", alt: "Buzo M51 8701" },
  { src: "/images/buzo-princeton.png", alt: "Buzo M51 Princeton" },
  { src: "/images/remera-7297.png", alt: "Remera M51 7297" },
  { src: "/images/remera-7318.png", alt: "Remera M51 7318" },
  { src: "/images/borcego-vurkina.png", alt: "Calzado Citadina VURKINA" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative bg-secondary h-[550px] sm:h-[600px] lg:h-[650px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-contain"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary text-white text-xs font-bold px-4 py-1.5 rounded mb-6 tracking-wide uppercase">
              2 locales en Berazategui
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] tracking-wide"
          >
            TU ESTILO
            <span className="block text-primary">TU PRECIO</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-primary mt-6 mb-6 rounded-full origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-md"
          >
            Ropa y calzado de marca en Berazategui
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link
              href="/catalogo"
              className="bg-primary text-white px-10 py-3.5 rounded font-semibold text-center hover:bg-red-700 transition-colors text-sm uppercase tracking-wider"
            >
              Ver catálogo
            </Link>
            <a
              href="#contacto"
              className="border-2 border-white/30 text-white px-10 py-3.5 rounded font-semibold text-center hover:bg-white hover:text-secondary transition-colors text-sm uppercase tracking-wider"
            >
              Contactanos
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
