"use client"

import { motion } from "framer-motion"

export default function ContactoFooter() {
  return (
    <>
      <footer id="locales" className="bg-[#0f0f0f] text-white" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bebas text-3xl md:text-4xl text-center mb-12 text-white"
          >
            ¿DÓNDE ENCONTRARNOS?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300">
              <h3 className="text-red-500 font-bold tracking-widest text-sm uppercase mb-2">
                LOCAL 1
              </h3>
              <p className="text-white font-semibold text-lg">
                Juan María Gutiérrez, Berazategui
              </p>
              <p className="text-white/50 text-sm mt-1">
                Lunes a sábado 9 a 20hs
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 hover:border-red-600/30 transition-all duration-300">
              <h3 className="text-red-500 font-bold tracking-widest text-sm uppercase mb-2">
                LOCAL 2
              </h3>
              <p className="text-white font-semibold text-lg">
                Barrio Marítimo, Berazategui
              </p>
              <p className="text-white/50 text-sm mt-1">
                Lunes a sábado 9 a 20hs
              </p>
            </div>
          </div>

          <div id="contacto" className="text-center mb-12">
            <h3 className="font-bebas text-2xl mb-4 text-white">Medios de pago</h3>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <span className="bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm">
                Efectivo
              </span>
              <span className="bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm">
                Transferencia
              </span>
              <span className="bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm">
                Débito
              </span>
              <span className="bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 text-white/70 text-sm">
                Crédito
              </span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5491124652183?text=Hola!%20Vi%20el%20cat%C3%A1logo%20online%20y%20quiero%20consultar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 text-lg"
              style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(37,211,102,0.5)"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)"
              }}
            >
              <span>💬</span> Consultanos por WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <footer className="bg-[#080808]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-white/20 text-sm">
            © 2025 El Triunfo · Berazategui, Buenos Aires
          </p>
          <p className="text-xs mt-2">
            Desarrollado por{' '}
            <a
              href="https://www.fdveloper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500/60 hover:text-red-400 underline transition-colors"
            >
              FDveloper
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
