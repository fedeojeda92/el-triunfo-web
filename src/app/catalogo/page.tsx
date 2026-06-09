import type { Metadata } from "next"
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
      <CatalogoGrid />
      <ContactoFooter />
    </>
  )
}
