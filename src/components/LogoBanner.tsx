"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function LogoBanner() {
  return (
    <section className="bg-white py-10 sm:py-14 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/logo.png"
            alt="El Triunfo"
            width={180}
            height={180}
            className="w-32 sm:w-40 lg:w-48 h-auto"
            priority
          />
          <div className="text-center">
            <h2 className="font-bebas text-3xl sm:text-4xl text-primary tracking-wider">
              EL TRIUNFO
            </h2>
            <div className="flex items-center gap-3 justify-center mt-1">
              <div className="w-8 h-px bg-border" />
              <p className="text-text-muted text-xs sm:text-sm tracking-wide uppercase">
                Ropa y Calzado de marca
              </p>
              <div className="w-8 h-px bg-border" />
            </div>
            <p className="text-text-muted text-xs mt-2">
              Berazategui, Buenos Aires
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
