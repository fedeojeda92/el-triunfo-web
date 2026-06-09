"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bebas text-3xl text-primary tracking-wider"
          >
            EL TRIUNFO
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
            <Link
              href="/catalogo"
              className="bg-primary text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Ver catálogo
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
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
