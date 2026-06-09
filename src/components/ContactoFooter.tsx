"use client"

import { motion } from "framer-motion"

export default function ContactoFooter() {
  return (
    <footer id="contacto" className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-4xl text-center mb-12"
        >
          ¿Dónde encontrarnos?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="font-bebas text-2xl mb-2 text-primary">
              Local 1
            </h3>
            <p className="text-gray-300">Juan María Gutiérrez, Berazategui</p>
            <p className="text-gray-400 text-sm mt-1">
              Lunes a sábado 9 a 20hs
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="font-bebas text-2xl mb-2 text-primary">
              Local 2
            </h3>
            <p className="text-gray-300">Barrio Marítimo, Berazategui</p>
            <p className="text-gray-400 text-sm mt-1">
              Lunes a sábado 9 a 20hs
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="font-bebas text-2xl mb-4">Medios de pago</h3>
          <div className="flex justify-center gap-8 text-lg">
            <span>💵 Efectivo</span>
            <span>🏦 Transferencia</span>
            <span>💳 Débito</span>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5491124652183?text=Hola!%20Vi%20el%20cat%C3%A1logo%20online%20y%20quiero%20consultar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors text-lg"
          >
            <span>💬</span> Consultanos por WhatsApp
          </a>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          © 2025 El Triunfo · Berazategui, Buenos Aires
        </div>
      </div>
    </footer>
  )
}
