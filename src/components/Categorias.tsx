"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { productos } from "@/data/productos"

const categoriasInfo = [
  { id: "zapatillas", icono: "👟", label: "Zapatillas" },
  { id: "borcegos", icono: "👢", label: "Borcegos" },
  { id: "buzos", icono: "🧥", label: "Buzos" },
  { id: "remeras", icono: "👕", label: "Remeras" },
]

export default function Categorias() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-4xl text-center mb-12"
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
                  className="block bg-secondary text-white rounded-xl p-8 text-center hover:bg-gray-900 transition-colors group"
                >
                  <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform inline-block">
                    {cat.icono}
                  </span>
                  <h3 className="font-bebas text-2xl">{cat.label}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {count} productos
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
