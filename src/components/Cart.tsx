"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useCart } from "@/context/CartContext"

const mediosPagoLabels: Record<string, string> = {
  efectivo: "Efectivo",
  transferencia: "Transferencia",
  debito: "Débito",
  credito: "Crédito",
}

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, isOpen, setIsOpen } =
    useCart()

  const formatPrice = (n: number) =>
    "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  const generateWhatsAppMessage = () => {
    const lines = [
      "Hola! Quiero realizar el siguiente pedido:",
      "",
      "━━━━━━━━━━━━━━━━━━━━━━",
      "",
    ]

    items.forEach((item, i) => {
      lines.push(
        `${i + 1}. ${item.producto.nombre}`,
        `   Talle: ${item.talle}`,
        `   Medio de pago: ${mediosPagoLabels[item.medioPago]}`,
        `   Precio unitario: ${formatPrice(item.producto.precios[item.medioPago])}`,
        `   Cantidad: ${item.cantidad}`,
        `   Subtotal: ${formatPrice(item.producto.precios[item.medioPago] * item.cantidad)}`,
        ""
      )
    })

    lines.push(
      "━━━━━━━━━━━━━━━━━━━━━━",
      "",
      `TOTAL: ${formatPrice(totalPrice)}`,
      "",
      "Quedo a la espera de su respuesta. Gracias!"
    )

    return encodeURIComponent(lines.join("\n"))
  }

  const handleCheckout = () => {
    const msg = generateWhatsAppMessage()
    window.open(`https://wa.me/5491124652183?text=${msg}`, "_blank")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0f0f0f] z-50 shadow-2xl flex flex-col"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center justify-between p-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <h2 className="font-bebas text-2xl text-white tracking-wider">MI CARRITO</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16 text-white/20 mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <p className="text-white/60 font-medium">Tu carrito está vacío</p>
                  <p className="text-white/30 text-sm mt-1">
                    Agregá productos para comenzar tu compra
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.producto.id}-${item.talle}-${item.medioPago}`}
                      className="flex gap-3 bg-[#1a1a1a] border border-white/5 rounded-xl p-3"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 bg-[#111111] rounded-lg overflow-hidden">
                        <Image
                          src={item.producto.imagen}
                          alt={item.producto.nombre}
                          fill
                          sizes="80px"
                          className="object-contain p-2"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white line-clamp-2">
                          {item.producto.nombre}
                        </h3>
                        <p className="text-xs text-white/40 mt-0.5">
                          Talle {item.talle} · {mediosPagoLabels[item.medioPago]}
                        </p>
                        <p className="text-sm font-bold text-red-500 mt-1">
                          {formatPrice(item.producto.precios[item.medioPago])}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.producto.id,
                                item.talle,
                                item.medioPago,
                                item.cantidad - 1
                              )
                            }
                            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-red-600 hover:text-red-500 transition-colors"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium w-6 text-center text-white">
                            {item.cantidad}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.producto.id,
                                item.talle,
                                item.medioPago,
                                item.cantidad + 1
                              )
                            }
                            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-red-600 hover:text-red-500 transition-colors"
                          >
                            +
                          </button>

                          <button
                            onClick={() =>
                              removeItem(item.producto.id, item.talle, item.medioPago)
                            }
                            className="ml-auto text-white/20 hover:text-red-400 transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Total</span>
                  <span className="text-xl font-black text-white">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300"
                  style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Finalizar compra por WhatsApp
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-white/30 hover:text-red-400 text-sm py-2 transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
