"use client"

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import { Producto } from "@/data/productos"

export type CartItem = {
  producto: Producto
  talle: string
  medioPago: "efectivo" | "transferencia" | "debito" | "credito"
  cantidad: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (producto: Producto, talle: string, medioPago: CartItem["medioPago"]) => void
  removeItem: (productoId: string, talle: string, medioPago: string) => void
  updateQuantity: (productoId: string, talle: string, medioPago: string, cantidad: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  hidratado: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hidratado, setHidratado] = useState(false)

  useEffect(() => {
    try {
      const guardado = localStorage.getItem("el-triunfo-carrito")
      if (guardado) {
        setItems(JSON.parse(guardado))
      }
    } catch {
      // localStorage bloqueado o datos corruptos, ignorar
    }
    setHidratado(true)
  }, [])

  useEffect(() => {
    if (!hidratado) return
    localStorage.setItem("el-triunfo-carrito", JSON.stringify(items))
  }, [items, hidratado])

  const addItem = useCallback(
    (producto: Producto, talle: string, medioPago: CartItem["medioPago"]) => {
      setItems((prev) => {
        const existing = prev.find(
          (item) =>
            item.producto.id === producto.id &&
            item.talle === talle &&
            item.medioPago === medioPago
        )
        if (existing) {
          return prev.map((item) =>
            item.producto.id === producto.id &&
            item.talle === talle &&
            item.medioPago === medioPago
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        }
        return [...prev, { producto, talle, medioPago, cantidad: 1 }]
      })
      setIsOpen(true)
    },
    []
  )

  const removeItem = useCallback((productoId: string, talle: string, medioPago: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.producto.id === productoId &&
            item.talle === talle &&
            item.medioPago === medioPago
          )
      )
    )
  }, [])

  const updateQuantity = useCallback(
    (productoId: string, talle: string, medioPago: string, cantidad: number) => {
      if (cantidad <= 0) {
        removeItem(productoId, talle, medioPago)
        return
      }
      setItems((prev) =>
        prev.map((item) =>
          item.producto.id === productoId &&
          item.talle === talle &&
          item.medioPago === medioPago
            ? { ...item, cantidad }
            : item
        )
      )
    },
    [removeItem]
  )

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.cantidad, 0)

  const totalPrice = items.reduce(
    (sum, item) => sum + item.producto.precios[item.medioPago] * item.cantidad,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
        hidratado,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
