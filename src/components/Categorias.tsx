"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { productos } from "@/data/productos"

const categoriasInfo = [
  { id: "zapatillas", label: "ZAPATILLAS" },
  { id: "borcegos", label: "BORCEGOS" },
  { id: "buzos", label: "BUZOS" },
  { id: "remeras", label: "REMERAS" },
]

export default function Categorias() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-4xl text-center mb-12 text-white"
        >
          Explorá por categoría
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoriasInfo.map((cat, index) => {
            const count = productos.filter(
              (p) => p.categoria === cat.id
            ).length
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/catalogo?categoria=${cat.id}`}
                  className="group relative bg-[#1a1a1a] border border-white/10 hover:border-red-600/50 rounded-xl p-8 flex flex-col gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)] overflow-hidden cursor-pointer"
                >
                  <span className="text-2xl font-black tracking-wider text-white">
                    {cat.label}
                  </span>
                  <span className="text-white/40 text-sm">
                    {count} productos
                  </span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
