"use client"

import { useState } from "react"
import Image from "next/image"
import { Producto } from "@/data/productos"
import { useCart } from "@/context/CartContext"
import Lightbox from "@/components/Lightbox"

const categoriaLabels: Record<string, string> = {
  zapatillas: "ZAPATILLAS",
  borcegos: "BORCEGOS",
  buzos: "BUZOS",
  remeras: "REMERAS",
}

type MedioPago = "efectivo" | "transferencia" | "debito" | "credito"

const mediosPago: { id: MedioPago; label: string }[] = [
  { id: "efectivo", label: "Efectivo" },
  { id: "transferencia", label: "Transferencia" },
  { id: "debito", label: "Débito" },
  { id: "credito", label: "Crédito" },
]

export default function ProductCard({ producto }: { producto: Producto }) {
  const [talleSeleccionado, setTalleSeleccionado] = useState("")
  const [medioPago, setMedioPago] = useState<MedioPago>("efectivo")
  const [agregado, setAgregado] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { addItem } = useCart()

  const precioActual = producto.precios[medioPago]

  const formatPrice = (n: number) =>
    "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  const handleAddToCart = () => {
    if (!talleSeleccionado) return
    addItem(producto, talleSeleccionado, medioPago)
    setAgregado(true)
    setTimeout(() => setAgregado(false), 1500)
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div
        className="relative w-full aspect-square bg-[#F0F0F0] flex items-center justify-center overflow-hidden cursor-zoom-in"
        onClick={() => setLightboxOpen(true)}
      >
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

      <Lightbox
        src={producto.imagen}
        alt={producto.nombre}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <div className="p-4">
        <h3 className="font-medium text-text line-clamp-2 mb-2">
          {producto.nombre}
        </h3>

        <div className="mb-3">
          <span className="text-primary font-bold text-lg">
            {formatPrice(precioActual)}
          </span>
          <span className="text-text-muted text-xs ml-1">{medioPago}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {mediosPago.map((mp) => (
            <button
              key={mp.id}
              onClick={() => setMedioPago(mp.id)}
              className={`px-2 py-1 text-xs rounded-full border transition-colors ${
                medioPago === mp.id
                  ? "bg-secondary text-white border-secondary"
                  : "bg-white text-text border-border hover:border-secondary"
              }`}
            >
              {mp.label}
            </button>
          ))}
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

        <button
          onClick={handleAddToCart}
          disabled={!talleSeleccionado}
          className={`w-full py-2.5 rounded-md text-sm font-medium transition-colors ${
            !talleSeleccionado
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : agregado
              ? "bg-green-600 text-white"
              : "bg-primary text-white hover:bg-red-700"
          }`}
        >
          {!talleSeleccionado
            ? "Seleccioná un talle"
            : agregado
            ? "Agregado ✓"
            : "Agregar al carrito"}
        </button>
      </div>
    </div>
  )
}
