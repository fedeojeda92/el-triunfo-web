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
    <div className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
      <div
        className="relative w-full aspect-square bg-[#1a1a1a] flex items-center justify-center overflow-hidden cursor-zoom-in"
        onClick={(e) => { e.stopPropagation(); setLightboxOpen(true) }}
      >
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 scale-90 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.currentTarget
            target.src = "/images/placeholder.svg"
          }}
        />
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
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
        <h3 className="font-bold text-white text-base mb-2 line-clamp-2">
          {producto.nombre}
        </h3>

        <div className="mb-3">
          <span className="text-red-500 font-black text-xl">
            {formatPrice(precioActual)}
          </span>
          <span className="text-white/30 text-xs ml-1">efectivo</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {mediosPago.map((mp) => (
            <button
              key={mp.id}
              onClick={() => setMedioPago(mp.id)}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                medioPago === mp.id
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-[#1a1a1a] text-white/50 border-white/10 hover:border-white/30"
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
              className={`w-10 h-10 text-sm font-medium rounded-lg border transition-colors ${
                talleSeleccionado === talle
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-[#1a1a1a] text-white border-white/15 hover:border-red-600 hover:text-red-500"
              }`}
            >
              {talle}
            </button>
          ))}
        </div>

        {!talleSeleccionado && (
          <p className="text-white/30 text-sm mb-3">Seleccioná un talle</p>
        )}

        <button
          onClick={handleAddToCart}
          disabled={!talleSeleccionado}
          className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
            !talleSeleccionado
              ? "bg-[#1a1a1a] text-white/20 cursor-not-allowed"
              : agregado
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white hover:bg-red-500"
          }`}
          style={
            talleSeleccionado && !agregado
              ? { boxShadow: "0 4px 15px rgba(220,38,38,0.3)" }
              : undefined
          }
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
