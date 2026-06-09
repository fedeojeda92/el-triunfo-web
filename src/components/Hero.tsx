"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-secondary min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              2 locales en Berazategui
            </span>
            <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-tight">
              TU ESTILO,
              <br />
              TU PRECIO
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-md mx-auto md:mx-0">
              Ropa y calzado de marca en Berazategui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <Link
                href="/catalogo"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium text-center hover:bg-red-700 transition-colors"
              >
                Ver catálogo
              </Link>
              <a
                href="#contacto"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-medium text-center hover:bg-white hover:text-secondary transition-colors"
              >
                Contactanos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/borcego-vurkina.png"
                alt="Calzado Citadina VURKINA"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
