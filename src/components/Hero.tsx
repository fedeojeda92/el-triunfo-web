"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const banners = ["/banner.png", "/banner2.png"]

export default function Hero() {
  const [banner, setBanner] = useState<string>("/banner.png")

  useEffect(() => {
    const random = banners[Math.floor(Math.random() * banners.length)]
    setBanner(random)
  }, [])

  return (
    <section className="relative bg-[#0a0a0a] h-[80vw] min-h-[420px] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={banner}
          alt="El Triunfo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col justify-start md:justify-center h-full px-6 md:px-16 max-w-2xl pt-16 md:pt-0 pb-24 md:pb-0">
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
            className="font-bebas text-4xl md:text-7xl text-white leading-[0.9] tracking-wide"
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}
