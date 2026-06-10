"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { productos } from "@/data/productos"
import ProductCard from "./ProductCard"
import Filtros from "./Filtros"
import { motion } from "framer-motion"

export default function CatalogoGrid() {
  const searchParams = useSearchParams()
  const categoriaInicial = searchParams.get("categoria") || "todos"
  const [categoriaSel, setCategoriaSel] = useState(categoriaInicial)
  const [rangoPrecio, setRangoPrecio] = useState([0, 150000])
  const [orden, setOrden] = useState("")

  const filtrados = useMemo(() => {
    let result = [...productos]

    if (categoriaSel !== "todos") {
      result = result.filter((p) => p.categoria === categoriaSel)
    }

    result = result.filter(
      (p) => p.precio >= rangoPrecio[0] && p.precio <= rangoPrecio[1]
    )

    if (orden === "menor") {
      result.sort((a, b) => a.precio - b.precio)
    } else if (orden === "mayor") {
      result.sort((a, b) => b.precio - a.precio)
    } else if (orden === "nombre") {
      result.sort((a, b) => a.nombre.localeCompare(b.nombre))
    }

    return result
  }, [categoriaSel, rangoPrecio, orden])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-bebas text-4xl mb-8">Catálogo completo</h1>

      <Filtros
        categoriaSel={categoriaSel}
        setCategoriaSel={setCategoriaSel}
        rangoPrecio={rangoPrecio}
        setRangoPrecio={setRangoPrecio}
        orden={orden}
        setOrden={setOrden}
      />

      <p className="text-text-muted text-sm mb-6">
        Mostrando {filtrados.length} productos
      </p>

      {filtrados.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">
            No encontramos productos con esos filtros
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtrados.map((producto, i) => (
            <motion.div
              key={producto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard producto={producto} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
