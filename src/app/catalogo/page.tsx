import type { Metadata } from "next"
import { Suspense } from "react"
import CatalogoGrid from "@/components/CatalogoGrid"
import ContactoFooter from "@/components/ContactoFooter"

export const metadata: Metadata = {
  title: "Catálogo | El Triunfo Berazategui",
  description:
    "Explorá nuestro catálogo completo de zapatillas, borcegos, buzos y remeras en Berazategui.",
}

export default function CatalogoPage() {
  return (
    <>
      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"><p className="text-text-muted">Cargando catálogo...</p></div>}>
        <CatalogoGrid />
      </Suspense>
      <ContactoFooter />
    </>
  )
}
