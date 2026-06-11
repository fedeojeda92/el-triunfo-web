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
    <section className="relative bg-[#0a0a0a] h-[550px] sm:h-[600px] lg:h-[650px] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block border border-red-600/50 backdrop-blur-sm text-red-500 text-xs font-bold px-4 py-1.5 rounded mb-6 tracking-wide uppercase"
            >
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
            <span className="block text-red-600">TU PRECIO</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-red-600 mt-6 mb-6 rounded-full origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/70 text-lg max-w-md"
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
              className="bg-red-600 text-white px-10 py-3.5 rounded font-semibold text-center hover:bg-red-500 transition-colors text-sm uppercase tracking-wider"
              style={{ boxShadow: "0 0 20px rgba(220,38,38,0.3)" }}
            >
              Ver catálogo
            </Link>
            <a
              href="#contacto"
              className="border border-white/20 text-white px-10 py-3.5 rounded font-semibold text-center hover:border-white/60 transition-colors text-sm uppercase tracking-wider bg-transparent"
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
                ? "bg-red-600 w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}
