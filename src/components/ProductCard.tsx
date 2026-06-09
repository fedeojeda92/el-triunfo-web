"use client"

import { useState } from "react"
import Image from "next/image"
import { Producto } from "@/data/productos"

const categoriaLabels: Record<string, string> = {
  zapatillas: "ZAPATILLAS",
  borcegos: "BORCEGOS",
  buzos: "BUZOS",
  remeras: "REMERAS",
}

export default function ProductCard({ producto }: { producto: Producto }) {
  const [talleSeleccionado, setTalleSeleccionado] = useState("")

  const whatsappMensaje = encodeURIComponent(
    `Hola! Quiero consultar por ${producto.nombre}${
      talleSeleccionado ? ` - Talle ${talleSeleccionado}` : ""
    }`
  )

  const formatPrice = (n: number) =>
    "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative w-full aspect-square bg-[#F0F0F0] flex items-center justify-center overflow-hidden">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.currentTarget
            target.src = "/images/placeholder.svg"
          }}
        />
        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
          {categoriaLabels[producto.categoria] || producto.categoria}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-text line-clamp-2 mb-2">
          {producto.nombre}
        </h3>

        <div className="mb-3">
          <span className="text-text-muted line-through text-sm">
            {formatPrice(producto.precio)}
          </span>
          <span className="text-primary font-bold text-lg ml-2">
            {formatPrice(producto.precios.efectivo)}
          </span>
          <span className="text-text-muted text-xs ml-1">efectivo</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {producto.talles.map((talle) => (
            <button
              key={talle}
              onClick={() => setTalleSeleccionado(talle)}
              className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                talleSeleccionado === talle
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-text border-border hover:border-primary"
              }`}
            >
              {talle}
            </button>
          ))}
        </div>

        <a
          href={`https://wa.me/5491124652183?text=${whatsappMensaje}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2.5 rounded-md text-sm font-medium transition-colors"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  )
}
