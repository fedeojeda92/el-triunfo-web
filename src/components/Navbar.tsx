"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/context/CartContext"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { totalItems, setIsOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="El Triunfo Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bebas text-2xl text-primary tracking-wider leading-tight">
                EL TRIUNFO
              </span>
              <span className="text-[10px] text-text-muted font-inter tracking-wide">
                Ropa y Calzado · Berazategui
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-text hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="text-sm font-medium text-text hover:text-primary transition-colors"
            >
              Catálogo
            </Link>
            <a
              href="#locales"
              className="text-sm font-medium text-text hover:text-primary transition-colors"
            >
              Locales
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-text hover:text-primary transition-colors"
            >
              Contacto
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-text hover:text-primary transition-colors"
              aria-label="Carrito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              href="/catalogo"
              className="bg-primary text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Ver catálogo
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-text"
              aria-label="Carrito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span
                className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-text"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/catalogo"
                className="text-sm font-medium text-text"
                onClick={() => setMenuOpen(false)}
              >
                Catálogo
              </Link>
              <a
                href="#locales"
                className="text-sm font-medium text-text"
                onClick={() => setMenuOpen(false)}
              >
                Locales
              </a>
              <a
                href="#contacto"
                className="text-sm font-medium text-text"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </a>
              <Link
                href="/catalogo"
                className="bg-primary text-white px-5 py-2 rounded-md text-sm font-medium text-center"
                onClick={() => setMenuOpen(false)}
              >
                Ver catálogo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
