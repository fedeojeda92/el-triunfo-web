import { productos, categorias } from '@/data/productos'
import CatalogoCliente from '@/components/CatalogoCliente'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo | El Triunfo Berazategui',
  description: 'Explorá nuestro catálogo completo de zapatillas, borcegos, buzos y remeras en Berazategui. Precios con efectivo, transferencia y débito.',
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-bebas text-[#111111] mb-2">
            CATÁLOGO COMPLETO
          </h1>
          <p className="text-[#666666]">
            {productos.length} productos disponibles
          </p>
        </div>
        <CatalogoCliente
          productos={productos}
          categorias={categorias}
        />
      </div>
    </main>
  )
}
